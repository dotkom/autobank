import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ReceiptOrderByWithRelationInputObjectSchema } from './ReceiptOrderByWithRelationInput.schema'
import { ApplicationOrderByWithRelationInputObjectSchema } from './ApplicationOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    occasion: z.lazy(() => SortOrderSchema).optional(),
    planned_date: z.lazy(() => SortOrderSchema).optional(),
    hours: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    participants: z.lazy(() => SortOrderSchema).optional(),
    payment_method: z.lazy(() => SortOrderSchema).optional(),
    receipt_id: z.lazy(() => SortOrderSchema).optional(),
    receipt: z
      .lazy(() => ReceiptOrderByWithRelationInputObjectSchema)
      .optional(),
    application: z
      .lazy(() => ApplicationOrderByWithRelationInputObjectSchema)
      .optional(),
    applicationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type OnlinepottenOrderByWithRelationInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenOrderByWithRelationInputObjectSchema
>
export const OnlinepottenOrderByWithRelationInputObjectSchema = Schema
