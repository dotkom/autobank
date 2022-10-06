import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.date().optional().nullable(),
  })
  .strict()

export type NullableDateTimeFieldUpdateOperationsInputObjectSchemaInfer =
  z.infer<typeof NullableDateTimeFieldUpdateOperationsInputObjectSchema>
export const NullableDateTimeFieldUpdateOperationsInputObjectSchema = Schema
