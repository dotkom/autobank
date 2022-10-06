import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.string().optional().nullable(),
  })
  .strict()

export type NullableStringFieldUpdateOperationsInputObjectSchemaInfer = z.infer<
  typeof NullableStringFieldUpdateOperationsInputObjectSchema
>
export const NullableStringFieldUpdateOperationsInputObjectSchema = Schema
