import { z } from 'zod'
import { OnlinepottenWhereInputObjectSchema } from './objects/OnlinepottenWhereInput.schema'
import { OnlinepottenOrderByWithAggregationInputObjectSchema } from './objects/OnlinepottenOrderByWithAggregationInput.schema'
import { OnlinepottenScalarWhereWithAggregatesInputObjectSchema } from './objects/OnlinepottenScalarWhereWithAggregatesInput.schema'
import { OnlinepottenScalarFieldEnumSchema } from './enums/OnlinepottenScalarFieldEnum.schema'

export const OnlinepottenGroupBySchema = z.object({
  where: OnlinepottenWhereInputObjectSchema.optional(),
  orderBy: OnlinepottenOrderByWithAggregationInputObjectSchema,
  having: OnlinepottenScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(OnlinepottenScalarFieldEnumSchema),
})
