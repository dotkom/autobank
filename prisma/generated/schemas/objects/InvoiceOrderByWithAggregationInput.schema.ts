import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { InvoiceCountOrderByAggregateInputObjectSchema } from './InvoiceCountOrderByAggregateInput.schema'
import { InvoiceAvgOrderByAggregateInputObjectSchema } from './InvoiceAvgOrderByAggregateInput.schema'
import { InvoiceMaxOrderByAggregateInputObjectSchema } from './InvoiceMaxOrderByAggregateInput.schema'
import { InvoiceMinOrderByAggregateInputObjectSchema } from './InvoiceMinOrderByAggregateInput.schema'
import { InvoiceSumOrderByAggregateInputObjectSchema } from './InvoiceSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    orgnr: z.lazy(() => SortOrderSchema).optional(),
    occasion: z.lazy(() => SortOrderSchema).optional(),
    method: z.lazy(() => SortOrderSchema).optional(),
    po_nr: z.lazy(() => SortOrderSchema).optional(),
    duedays: z.lazy(() => SortOrderSchema).optional(),
    applicationId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => InvoiceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => InvoiceAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => InvoiceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => InvoiceMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => InvoiceSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export type InvoiceOrderByWithAggregationInputObjectSchemaInfer = z.infer<
  typeof InvoiceOrderByWithAggregationInputObjectSchema
>
export const InvoiceOrderByWithAggregationInputObjectSchema = Schema
