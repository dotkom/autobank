import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    provider: z.lazy(() => SortOrderSchema).optional(),
    providerAccountId: z.lazy(() => SortOrderSchema).optional(),
    refresh_token: z.lazy(() => SortOrderSchema).optional(),
    access_token: z.lazy(() => SortOrderSchema).optional(),
    expires_at: z.lazy(() => SortOrderSchema).optional(),
    token_type: z.lazy(() => SortOrderSchema).optional(),
    scope: z.lazy(() => SortOrderSchema).optional(),
    id_token: z.lazy(() => SortOrderSchema).optional(),
    session_state: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type AccountCountOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof AccountCountOrderByAggregateInputObjectSchema
>
export const AccountCountOrderByAggregateInputObjectSchema = Schema
