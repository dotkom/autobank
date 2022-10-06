import { z } from 'zod'
import { statusTypeSchema } from '../enums/statusType.schema'
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
        z.lazy(() => NestedEnumstatusTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export type EnumstatusTypeFilterObjectSchemaInfer = z.infer<
  typeof EnumstatusTypeFilterObjectSchema
>
export const EnumstatusTypeFilterObjectSchema = Schema
