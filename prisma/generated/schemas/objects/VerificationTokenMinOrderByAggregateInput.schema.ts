import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    identifier: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type VerificationTokenMinOrderByAggregateInputObjectSchemaInfer =
  z.infer<typeof VerificationTokenMinOrderByAggregateInputObjectSchema>
export const VerificationTokenMinOrderByAggregateInputObjectSchema = Schema
