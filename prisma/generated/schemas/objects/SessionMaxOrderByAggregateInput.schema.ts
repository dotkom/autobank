import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sessionToken: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type SessionMaxOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof SessionMaxOrderByAggregateInputObjectSchema
>
export const SessionMaxOrderByAggregateInputObjectSchema = Schema
