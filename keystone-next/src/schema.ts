import { createSchema } from '@keystone-next/keystone/schema'

import Post from './lists/post'
import Tag from './lists/tag'
import User from './lists/user'

export const lists = createSchema({
	User,
	Post,
	Tag
})