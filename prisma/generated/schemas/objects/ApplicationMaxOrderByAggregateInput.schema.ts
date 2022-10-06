import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  })
  .strict()

export type ApplicationMaxOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof ApplicationMaxOrderByAggregateInputObjectSchema
>
export const ApplicationMaxOrderByAggregateInputObjectSchema = Schema
