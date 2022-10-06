import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { receiptTypeSchema } from '../enums/receiptType.schema'
import { EnumreceiptTypeFieldUpdateOperationsInputObjectSchema } from './EnumreceiptTypeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { ReceiptUpdateappendixInputObjectSchema } from './ReceiptUpdateappendixInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => receiptTypeSchema),
        z.lazy(() => EnumreceiptTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    account: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    card: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    paid_at: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    amount: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    occasion: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    appendix: z
      .union([
        z.lazy(() => ReceiptUpdateappendixInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    applicationId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export type ReceiptUncheckedUpdateWithoutOnlinepottenInputObjectSchemaInfer =
  z.infer<typeof ReceiptUncheckedUpdateWithoutOnlinepottenInputObjectSchema>
export const ReceiptUncheckedUpdateWithoutOnlinepottenInputObjectSchema = Schema
