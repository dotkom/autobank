import { z } from 'zod'
import { VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema'
import { VerificationTokenOrderByWithRelationInputObjectSchema } from './objects/VerificationTokenOrderByWithRelationInput.schema'
import { VerificationTokenWhereUniqueInputObjectSchema } from './objects/VerificationTokenWhereUniqueInput.schema'

export const VerificationTokenAggregateSchema = z.object({
  where: VerificationTokenWhereInputObjectSchema.optional(),
  orderBy: VerificationTokenOrderByWithRelationInputObjectSchema.optional(),
  cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
})
