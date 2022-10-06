import { z } from 'zod'
import { ApplicationWhereInputObjectSchema } from './objects/ApplicationWhereInput.schema'
import { ApplicationOrderByWithRelationInputObjectSchema } from './objects/ApplicationOrderByWithRelationInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './objects/ApplicationWhereUniqueInput.schema'

export const ApplicationAggregateSchema = z.object({
  where: ApplicationWhereInputObjectSchema.optional(),
  orderBy: ApplicationOrderByWithRelationInputObjectSchema.optional(),
  cursor: ApplicationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
})
