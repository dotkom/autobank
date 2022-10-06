import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ReceiptCountOrderByAggregateInputObjectSchema } from './ReceiptCountOrderByAggregateInput.schema'
import { ReceiptAvgOrderByAggregateInputObjectSchema } from './ReceiptAvgOrderByAggregateInput.schema'
import { ReceiptMaxOrderByAggregateInputObjectSchema } from './ReceiptMaxOrderByAggregateInput.schema'
import { ReceiptMinOrderByAggregateInputObjectSchema } from './ReceiptMinOrderByAggregateInput.schema'
import { ReceiptSumOrderByAggregateInputObjectSchema } from './ReceiptSumOrderByAggregateInput.schema'

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
    _count: z
      .lazy(() => ReceiptCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ReceiptAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ReceiptMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReceiptMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ReceiptSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export type ReceiptOrderByWithAggregationInputObjectSchemaInfer = z.infer<
  typeof ReceiptOrderByWithAggregationInputObjectSchema
>
export const ReceiptOrderByWithAggregationInputObjectSchema = Schema
