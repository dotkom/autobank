import { z } from 'zod'
import { OnlinepottenWhereInputObjectSchema } from './objects/OnlinepottenWhereInput.schema'
import { OnlinepottenOrderByWithRelationInputObjectSchema } from './objects/OnlinepottenOrderByWithRelationInput.schema'
import { OnlinepottenWhereUniqueInputObjectSchema } from './objects/OnlinepottenWhereUniqueInput.schema'

export const OnlinepottenAggregateSchema = z.object({
  where: OnlinepottenWhereInputObjectSchema.optional(),
  orderBy: OnlinepottenOrderByWithRelationInputObjectSchema.optional(),
  cursor: OnlinepottenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
})
