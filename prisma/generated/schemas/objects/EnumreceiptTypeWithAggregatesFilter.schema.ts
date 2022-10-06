import { z } from 'zod'
import { receiptTypeSchema } from '../enums/receiptType.schema'
import { NestedEnumreceiptTypeWithAggregatesFilterObjectSchema } from './NestedEnumreceiptTypeWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumreceiptTypeFilterObjectSchema } from './NestedEnumreceiptTypeFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    equals: z.lazy(() => receiptTypeSchema).optional(),
    in: z
      .lazy(() => receiptTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => receiptTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => receiptTypeSchema),
        z.lazy(() => NestedEnumreceiptTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumreceiptTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumreceiptTypeFilterObjectSchema).optional(),
  })
  .strict()

export type EnumreceiptTypeWithAggregatesFilterObjectSchemaInfer = z.infer<
  typeof EnumreceiptTypeWithAggregatesFilterObjectSchema
>
export const EnumreceiptTypeWithAggregatesFilterObjectSchema = Schema
