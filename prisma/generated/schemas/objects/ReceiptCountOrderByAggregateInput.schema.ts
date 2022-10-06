import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    account: z.lazy(() => SortOrderSchema).optional(),
    card: z.lazy(() => SortOrderSchema).optional(),
    paid_at: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    occasion: z.lazy(() => SortOrderSchema).optional(),
    appendix: z.lazy(() => SortOrderSchema).optional(),
    applicationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type ReceiptCountOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof ReceiptCountOrderByAggregateInputObjectSchema
>
export const ReceiptCountOrderByAggregateInputObjectSchema = Schema
