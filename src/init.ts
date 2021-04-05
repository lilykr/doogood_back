import { bold, dim, green } from 'chalk'

import { Keystone } from '@keystonejs/keystone'
import { createItem, getItems } from '@keystonejs/server-side-graphql-client'

const adminCreds = {
  email: 'admin@doogood.com',
  password: 'azertyuiop',
}

const createMasterAdmin = async (keystone: Keystone, context: any) => {
  const { email, password } = adminCreds

  return createItem({
    keystone,
    context,
    listKey: 'User',
    item: {
      email,
      password,
    },
  })
}

export const onConnect = async (keystone: Keystone) => {
  const { email, password } = adminCreds

  if (!process.env.KEYSTONE_SECRET) throw new Error('Missing "KEYSTONE_SECRET" environnement variable.')
  if (process.env.NODE_ENV === 'test') return

  // Create server-side client context
  const context = keystone.createContext({
    // @ts-ignore
    authentication: { item: { id: process.env.KEYSTONE_SECRET } },
    skipAccessControl: true,
  })

  // Fetch master admin
  const res = await getItems({
    keystone,
    listKey: 'User',
    returnFields: 'email',
    where: { email: 'admin@doogood.com' },
  })

  const admin = res[0]

  // Auto-create master admin
  if (!admin)
    await createMasterAdmin(keystone, context)

  if (process.env.NODE_ENV === 'development') {
    // Print master admin credentials
    console.log()
    console.log(`${green('✔')} ${bold('Master Admin:')}`)
    console.log(`➜ ${dim('Email:   ')} ${email}`)
    console.log(`➜ ${dim('Password:')} ${password}`)
  }
}
