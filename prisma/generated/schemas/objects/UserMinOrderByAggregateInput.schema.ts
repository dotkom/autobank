import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type UserMinOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof UserMinOrderByAggregateInputObjectSchema
>
export const UserMinOrderByAggregateInputObjectSchema = Schema
