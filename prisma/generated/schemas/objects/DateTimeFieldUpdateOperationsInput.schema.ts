import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.date().optional(),
  })
  .strict()

export type DateTimeFieldUpdateOperationsInputObjectSchemaInfer = z.infer<
  typeof DateTimeFieldUpdateOperationsInputObjectSchema
>
export const DateTimeFieldUpdateOperationsInputObjectSchema = Schema
