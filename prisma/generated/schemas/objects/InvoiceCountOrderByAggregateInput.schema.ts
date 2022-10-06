import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  })
  .strict()

export type InvoiceCountOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof InvoiceCountOrderByAggregateInputObjectSchema
>
export const InvoiceCountOrderByAggregateInputObjectSchema = Schema
