import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { OnlinepottenCountOrderByAggregateInputObjectSchema } from './OnlinepottenCountOrderByAggregateInput.schema'
import { OnlinepottenAvgOrderByAggregateInputObjectSchema } from './OnlinepottenAvgOrderByAggregateInput.schema'
import { OnlinepottenMaxOrderByAggregateInputObjectSchema } from './OnlinepottenMaxOrderByAggregateInput.schema'
import { OnlinepottenMinOrderByAggregateInputObjectSchema } from './OnlinepottenMinOrderByAggregateInput.schema'
import { OnlinepottenSumOrderByAggregateInputObjectSchema } from './OnlinepottenSumOrderByAggregateInput.schema'

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
    _count: z
      .lazy(() => OnlinepottenCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => OnlinepottenAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => OnlinepottenMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => OnlinepottenMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => OnlinepottenSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export type OnlinepottenOrderByWithAggregationInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenOrderByWithAggregationInputObjectSchema
>
export const OnlinepottenOrderByWithAggregationInputObjectSchema = Schema
