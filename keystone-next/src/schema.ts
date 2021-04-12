import { createSchema } from '@keystone-next/keystone/schema'

import { Category } from './lists/category'
import { Charity } from './lists/charity'
import { Mission } from './lists/mission'
import { Post } from './lists/post'
import Tag from './lists/tag'
import { User } from './lists/user'

export const lists = createSchema({
  User,
  Category,
  Charity,
  Mission,
  Post,
  Tag,
})
