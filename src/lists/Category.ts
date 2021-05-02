import { Text } from '@keystonejs/fields'
import { Color } from '@keystonejs/fields-color'

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    lightColor: {
      type: Color,
      isRequired: true,
    },
    darkColor: {
      type: Color,
      isRequired: true,
    },
  },
}
