import { z } from 'zod'
import { roleSchema } from '../enums/role.schema'
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
        z.lazy(() => NestedEnumroleFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export type EnumroleFilterObjectSchemaInfer = z.infer<
  typeof EnumroleFilterObjectSchema
>
export const EnumroleFilterObjectSchema = Schema
