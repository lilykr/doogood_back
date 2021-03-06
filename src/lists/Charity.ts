import { Text, Url, Relationship } from '@keystonejs/fields'
import { LocationGoogle } from '@keystonejs/fields-location-google'

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    description: {
      type: Text,
      isRequired: true,
    },
    address: {
      type: LocationGoogle,
      googleMapsKey: process.env.GOOGLE_MAPS_KEY,
      isRequired: true,
    },
    email: {
      type: Text,
      isRequired: true,
    },
    telephone: {
      type: Text,
      isRequired: false,
    },
    website: {
      type: Url,
      isRequired: false,
    },
    category: { type: Relationship, ref: 'Category', many: true },
    missions: { type: Relationship, ref: 'Mission.charity', many: true },
    user: { type: Relationship, ref: 'User', many: false },
  },
}
