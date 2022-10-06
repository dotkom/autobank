import { z } from 'zod'
import { receiptTypeSchema } from '../enums/receiptType.schema'

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
        z.lazy(() => NestedEnumreceiptTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict()

export type NestedEnumreceiptTypeFilterObjectSchemaInfer = z.infer<
  typeof NestedEnumreceiptTypeFilterObjectSchema
>
export const NestedEnumreceiptTypeFilterObjectSchema = Schema
