import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SessionCountOrderByAggregateInputObjectSchema } from './SessionCountOrderByAggregateInput.schema'
import { SessionMaxOrderByAggregateInputObjectSchema } from './SessionMaxOrderByAggregateInput.schema'
import { SessionMinOrderByAggregateInputObjectSchema } from './SessionMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sessionToken: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SessionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SessionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SessionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export type SessionOrderByWithAggregationInputObjectSchemaInfer = z.infer<
  typeof SessionOrderByWithAggregationInputObjectSchema
>
export const SessionOrderByWithAggregationInputObjectSchema = Schema
