import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    hours: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type OnlinepottenSumOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenSumOrderByAggregateInputObjectSchema
>
export const OnlinepottenSumOrderByAggregateInputObjectSchema = Schema
