import { z } from 'zod'
import { statusTypeSchema } from '../enums/statusType.schema'
import { NestedEnumstatusTypeWithAggregatesFilterObjectSchema } from './NestedEnumstatusTypeWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumstatusTypeFilterObjectSchema } from './NestedEnumstatusTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    equals: z.lazy(() => statusTypeSchema).optional(),
    in: z
      .lazy(() => statusTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => statusTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => statusTypeSchema),
        z.lazy(() => NestedEnumstatusTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumstatusTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumstatusTypeFilterObjectSchema).optional(),
  })
  .strict()

export type EnumstatusTypeWithAggregatesFilterObjectSchemaInfer = z.infer<
  typeof EnumstatusTypeWithAggregatesFilterObjectSchema
>
export const EnumstatusTypeWithAggregatesFilterObjectSchema = Schema
