import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    hours: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export type OnlinepottenAvgOrderByAggregateInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenAvgOrderByAggregateInputObjectSchema
>
export const OnlinepottenAvgOrderByAggregateInputObjectSchema = Schema
