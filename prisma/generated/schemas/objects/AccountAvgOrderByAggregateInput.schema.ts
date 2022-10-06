import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    expires_at: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type AccountAvgOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof AccountAvgOrderByAggregateInputObjectSchema
>
export const AccountAvgOrderByAggregateInputObjectSchema = Schema
