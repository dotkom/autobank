import { z } from 'zod'
import { SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema'
import { SessionOrderByWithRelationInputObjectSchema } from './objects/SessionOrderByWithRelationInput.schema'
import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema'

export const SessionAggregateSchema = z.object({
  where: SessionWhereInputObjectSchema.optional(),
  orderBy: SessionOrderByWithRelationInputObjectSchema.optional(),
  cursor: SessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
})
