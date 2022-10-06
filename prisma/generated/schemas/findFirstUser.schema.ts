import { z } from 'zod'
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema'
import { UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema'

export const UserFindFirstSchema = z.object({
  where: UserWhereInputObjectSchema.optional(),
  orderBy: UserOrderByWithRelationInputObjectSchema.optional(),
  cursor: UserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserScalarFieldEnumSchema).optional(),
})
