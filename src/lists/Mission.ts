import { Text, DateTimeUtc, Relationship } from '@keystonejs/fields'
import { LocationGoogle } from '@keystonejs/fields-location-google'
import { Wysiwyg } from '@keystonejs/fields-wysiwyg-tinymce'

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    description: {
      type: Wysiwyg,
      isRequired: true,
    },
    address: {
      type: LocationGoogle,
      googleMapsKey: process.env.GOOGLE_MAPS_KEY,
      isRequired: true,
    },
    date: {
      type: DateTimeUtc,
      isRequired: true,
    },
    duration: {
      type: Text,
      isRequired: false,
    },
    category: { type: Relationship, ref: 'Category', many: true },
    charity: { type: Relationship, ref: 'Charity.missions', many: false },

  },
}
