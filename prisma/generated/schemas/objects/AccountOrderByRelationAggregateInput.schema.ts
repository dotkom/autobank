import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type AccountOrderByRelationAggregateInputObjectSchemaInfer = z.infer<
  typeof AccountOrderByRelationAggregateInputObjectSchema
>
export const AccountOrderByRelationAggregateInputObjectSchema = Schema
