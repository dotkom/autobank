import { z } from 'zod'
import { ApplicationWhereInputObjectSchema } from './objects/ApplicationWhereInput.schema'
import { ApplicationOrderByWithAggregationInputObjectSchema } from './objects/ApplicationOrderByWithAggregationInput.schema'
import { ApplicationScalarWhereWithAggregatesInputObjectSchema } from './objects/ApplicationScalarWhereWithAggregatesInput.schema'
import { ApplicationScalarFieldEnumSchema } from './enums/ApplicationScalarFieldEnum.schema'

export const ApplicationGroupBySchema = z.object({
  where: ApplicationWhereInputObjectSchema.optional(),
  orderBy: ApplicationOrderByWithAggregationInputObjectSchema,
  having: ApplicationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ApplicationScalarFieldEnumSchema),
})
