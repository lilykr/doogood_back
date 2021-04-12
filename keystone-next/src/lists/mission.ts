import { relationship, text, timestamp } from '@keystone-next/fields'
import { document } from '@keystone-next/fields-document'
import { list } from '@keystone-next/keystone/schema'

export const Mission = list({
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    description: document({
      formatting: true,
      links: true,
      dividers: true,
    }),

    // createdAt: timestamp({ isRequired: true }),
    date: timestamp({ isRequired: true }),
    // TODO: add address
    duration: text({ isRequired: true }),
    category: relationship({ ref: 'Category', many: true }),
    charity: relationship({ ref: 'Charity.missions', many: false }),

  },
})
