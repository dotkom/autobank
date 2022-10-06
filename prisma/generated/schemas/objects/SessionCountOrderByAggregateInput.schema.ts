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

export type SessionCountOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof SessionCountOrderByAggregateInputObjectSchema
>
export const SessionCountOrderByAggregateInputObjectSchema = Schema
