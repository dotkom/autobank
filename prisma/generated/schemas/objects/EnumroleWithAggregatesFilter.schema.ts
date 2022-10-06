import { z } from 'zod'
import { roleSchema } from '../enums/role.schema'
import { NestedEnumroleWithAggregatesFilterObjectSchema } from './NestedEnumroleWithAggregatesFilter.schema'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'
import { NestedEnumroleFilterObjectSchema } from './NestedEnumroleFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    equals: z.lazy(() => roleSchema).optional(),
    in: z
      .lazy(() => roleSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => roleSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => roleSchema),
        z.lazy(() => NestedEnumroleWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumroleFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumroleFilterObjectSchema).optional(),
  })
  .strict()

export type EnumroleWithAggregatesFilterObjectSchemaInfer = z.infer<
  typeof EnumroleWithAggregatesFilterObjectSchema
>
export const EnumroleWithAggregatesFilterObjectSchema = Schema
