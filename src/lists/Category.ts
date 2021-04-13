import { Text, Color } from '@keystonejs/fields'

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    lightColor: {
      type: Text,
      isRequired: true,
    },
    darkColor: {
      type: Text,
      isRequired: true,
    },
  },
}
