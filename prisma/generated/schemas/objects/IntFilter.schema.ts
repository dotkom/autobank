import { z } from 'zod'
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntFilterObjectSchema)])
      .optional(),
  })
  .strict()

export type IntFilterObjectSchemaInfer = z.infer<typeof IntFilterObjectSchema>
export const IntFilterObjectSchema = Schema
