import { z } from 'zod'
import { VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema'
import { VerificationTokenOrderByWithAggregationInputObjectSchema } from './objects/VerificationTokenOrderByWithAggregationInput.schema'
import { VerificationTokenScalarWhereWithAggregatesInputObjectSchema } from './objects/VerificationTokenScalarWhereWithAggregatesInput.schema'
import { VerificationTokenScalarFieldEnumSchema } from './enums/VerificationTokenScalarFieldEnum.schema'

export const VerificationTokenGroupBySchema = z.object({
  where: VerificationTokenWhereInputObjectSchema.optional(),
  orderBy: VerificationTokenOrderByWithAggregationInputObjectSchema,
  having:
    VerificationTokenScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VerificationTokenScalarFieldEnumSchema),
})
