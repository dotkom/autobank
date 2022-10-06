import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    equals: z.string().array().optional().nullable(),
    has: z.string().optional().nullable(),
    hasEvery: z.string().array().optional(),
    hasSome: z.string().array().optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict()

export type StringNullableListFilterObjectSchemaInfer = z.infer<
  typeof StringNullableListFilterObjectSchema
>
export const StringNullableListFilterObjectSchema = Schema
