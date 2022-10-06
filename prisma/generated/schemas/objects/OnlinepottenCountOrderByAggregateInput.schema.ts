import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
    applicationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type OnlinepottenCountOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenCountOrderByAggregateInputObjectSchema
>
export const OnlinepottenCountOrderByAggregateInputObjectSchema = Schema
