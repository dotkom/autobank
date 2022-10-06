import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ApplicationCountOrderByAggregateInputObjectSchema } from './ApplicationCountOrderByAggregateInput.schema'
import { ApplicationMaxOrderByAggregateInputObjectSchema } from './ApplicationMaxOrderByAggregateInput.schema'
import { ApplicationMinOrderByAggregateInputObjectSchema } from './ApplicationMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    fullname: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    approved_at: z.lazy(() => SortOrderSchema).optional(),
    updatedById: z.lazy(() => SortOrderSchema).optional(),
    last_updated: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    responsible_committee: z.lazy(() => SortOrderSchema).optional(),
    comments: z.lazy(() => SortOrderSchema).optional(),
    error: z.lazy(() => SortOrderSchema).optional(),
    error_fields: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ApplicationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ApplicationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ApplicationMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export type ApplicationOrderByWithAggregationInputObjectSchemaInfer = z.infer<
  typeof ApplicationOrderByWithAggregationInputObjectSchema
>
export const ApplicationOrderByWithAggregationInputObjectSchema = Schema
