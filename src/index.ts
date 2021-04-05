require('dotenv').config()

import { bold, dim, green, yellow } from 'chalk'

import server, { adapter as MongoDB } from './server'

server
  .listen()
  .then(() => {
    console.log()
    console.log(`${green('✔')} ${bold('Keystone instance is ready')} 🚀`)
    console.log(`🔗 ${dim('Keystone Admin UI:')}    http://localhost:${server.port}/admin`)
    console.log(`🔗 ${dim('GraphQL Playground:')}   http://localhost:${server.port}/admin/graphiql`)
    console.log(`🔗 ${dim('GraphQL API:')}          http://localhost:${server.port}/admin/api`)

    if (process.env.NODE_ENV !== 'production') {
      // @ts-ignore
      console.log(`🔗 ${dim('MongoDB URI:')}          ${MongoDB.config.mongoUri}`)
      console.log()
      console.log(`${yellow.bold('⚠')}  ${yellow('Running in:')} ${yellow.bold(process.env.NODE_ENV)} ${yellow('!')}`)
    }

    console.log()
  })
  .catch(console.error)
