require('dotenv').config()

import express from 'express'

import { AdminUIApp } from '@keystonejs/app-admin-ui'
import { GraphQLApp } from '@keystonejs/app-graphql'
import { Text, Checkbox, Password } from '@keystonejs/fields';
import { Keystone } from '@keystonejs/keystone';
import { onConnect } from './init';

import { PasswordAuthStrategy } from '@keystonejs/auth-password';
import { MongooseAdapter as Adapter } from '@keystonejs/adapter-mongoose';

const PROJECT_NAME = 'doogood';
const adapterConfig = { mongoUri: 'mongodb://localhost/doogood' };

export const adapter = new Adapter(adapterConfig)

const keystone = new Keystone({
  adapter,
  cookieSecret: process.env.KEYSTONE_SECRET,
  onConnect,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'

const apps = [
  new GraphQLApp(),
  new AdminUIApp({
    name: PROJECT_NAME,
    enableDefaultRoute: true,
    authStrategy,
  }),
]

export default {
  port,
  listen: async () => {
    const app = express()

    const options = { apps, dev }
    const { middlewares } = await keystone.prepare(options)

    await keystone.connect()

    app.use(middlewares)

    return app.listen(port)
  },
}
