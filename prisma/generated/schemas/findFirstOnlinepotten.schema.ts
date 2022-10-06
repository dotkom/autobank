import { z } from 'zod'
import { OnlinepottenWhereInputObjectSchema } from './objects/OnlinepottenWhereInput.schema'
import { OnlinepottenOrderByWithRelationInputObjectSchema } from './objects/OnlinepottenOrderByWithRelationInput.schema'
import { OnlinepottenWhereUniqueInputObjectSchema } from './objects/OnlinepottenWhereUniqueInput.schema'
import { OnlinepottenScalarFieldEnumSchema } from './enums/OnlinepottenScalarFieldEnum.schema'

export const OnlinepottenFindFirstSchema = z.object({
  where: OnlinepottenWhereInputObjectSchema.optional(),
  orderBy: OnlinepottenOrderByWithRelationInputObjectSchema.optional(),
  cursor: OnlinepottenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OnlinepottenScalarFieldEnumSchema).optional(),
})
