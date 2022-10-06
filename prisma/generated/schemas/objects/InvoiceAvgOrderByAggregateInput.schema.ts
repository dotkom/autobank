import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    duedays: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type InvoiceAvgOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof InvoiceAvgOrderByAggregateInputObjectSchema
>
export const InvoiceAvgOrderByAggregateInputObjectSchema = Schema
