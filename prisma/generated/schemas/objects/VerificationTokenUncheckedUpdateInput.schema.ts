import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    identifier: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    token: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    expires: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export type VerificationTokenUncheckedUpdateInputObjectSchemaInfer = z.infer<
  typeof VerificationTokenUncheckedUpdateInputObjectSchema
>
export const VerificationTokenUncheckedUpdateInputObjectSchema = Schema
