import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    amount: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type ReceiptAvgOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof ReceiptAvgOrderByAggregateInputObjectSchema
>
export const ReceiptAvgOrderByAggregateInputObjectSchema = Schema
