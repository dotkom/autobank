import { z } from 'zod'
import { NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    equals: z.date().optional().nullable(),
    in: z.date().array().optional().nullable(),
    notIn: z.date().array().optional().nullable(),
    lt: z.date().optional(),
    lte: z.date().optional(),
    gt: z.date().optional(),
    gte: z.date().optional(),
    not: z
      .union([z.date(), z.lazy(() => NestedDateTimeNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export type DateTimeNullableFilterObjectSchemaInfer = z.infer<
  typeof DateTimeNullableFilterObjectSchema
>
export const DateTimeNullableFilterObjectSchema = Schema
