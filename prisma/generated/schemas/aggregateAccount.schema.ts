import { z } from 'zod'
import { AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema'
import { AccountOrderByWithRelationInputObjectSchema } from './objects/AccountOrderByWithRelationInput.schema'
import { AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema'

export const AccountAggregateSchema = z.object({
  where: AccountWhereInputObjectSchema.optional(),
  orderBy: AccountOrderByWithRelationInputObjectSchema.optional(),
  cursor: AccountWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
})
