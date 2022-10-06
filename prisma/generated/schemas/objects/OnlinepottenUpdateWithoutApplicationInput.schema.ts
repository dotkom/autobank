import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { OnlinepottenUpdateparticipantsInputObjectSchema } from './OnlinepottenUpdateparticipantsInput.schema'
import { ReceiptUpdateOneWithoutOnlinepottenNestedInputObjectSchema } from './ReceiptUpdateOneWithoutOnlinepottenNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    occasion: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    planned_date: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    hours: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    participants: z
      .union([
        z.lazy(() => OnlinepottenUpdateparticipantsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    payment_method: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    receipt: z
      .lazy(() => ReceiptUpdateOneWithoutOnlinepottenNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export type OnlinepottenUpdateWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof OnlinepottenUpdateWithoutApplicationInputObjectSchema>
export const OnlinepottenUpdateWithoutApplicationInputObjectSchema = Schema