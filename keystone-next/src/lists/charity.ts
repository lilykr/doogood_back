require('dotenv').config()

import { cloudinaryImage } from '@keystone-next/cloudinary'
import { relationship, text } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'

export const Charity = list({
  ui: {
    listView: {
      initialColumns: ['name', 'description', 'cover', 'email', 'telephone'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({ isRequired: true }),
    // TODO: add address
    email: text({ isRequired: true }),
    telephone: text({ isRequired: true }),
    website: text({ }),
    category: relationship({ ref: 'Category', many: true }),
    user: relationship({ ref: 'User', many: false }),
    missions: relationship({ ref: 'Mission.charity', many: true }),
    cover: cloudinaryImage({
      isRequired: true,
      cloudinary: {
		  cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
		  apiKey: process.env.CLOUDINARY_API_KEY!,
		  apiSecret: process.env.CLOUDINARY_API_SECRET!,
		  folder: process.env.CLOUDINARY_API_FOLDER,
      },
	  }),
  },
})
