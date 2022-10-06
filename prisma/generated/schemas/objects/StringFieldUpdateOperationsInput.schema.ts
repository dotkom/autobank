import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.string().optional(),
  })
  .strict()

export type StringFieldUpdateOperationsInputObjectSchemaInfer = z.infer<
  typeof StringFieldUpdateOperationsInputObjectSchema
>
export const StringFieldUpdateOperationsInputObjectSchema = Schema
