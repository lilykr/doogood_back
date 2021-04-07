require('dotenv').config()

import express from 'express'

import { AdminUIApp } from '@keystonejs/app-admin-ui'
import { onConnect } from './init'
import { GraphQLApp } from '@keystonejs/app-graphql'
import { Keystone } from '@keystonejs/keystone'

import { PasswordAuthStrategy } from '@keystonejs/auth-password'
import { MongooseAdapter as Adapter } from '@keystonejs/adapter-mongoose'

const Mission = require('./lists/Mission')
const User = require('./lists/User')
const Charity = require('./lists/Charity')
const Category = require('./lists/Category')

const PROJECT_NAME = 'doogood'
const adapterConfig = { mongoUri: 'mongodb://localhost/doogood' }

export const adapter = new Adapter(adapterConfig)

const keystone = new Keystone({
  adapter,
  cookieSecret: process.env.KEYSTONE_SECRET,
  onConnect,
})

keystone.createList('User', User)
keystone.createList('Charity', Charity)
keystone.createList('Mission', Mission)
keystone.createList('Category', Category)

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
})

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
