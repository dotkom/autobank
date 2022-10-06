import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { receiptTypeSchema } from '../enums/receiptType.schema'
import { EnumreceiptTypeFieldUpdateOperationsInputObjectSchema } from './EnumreceiptTypeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { ReceiptUpdateappendixInputObjectSchema } from './ReceiptUpdateappendixInput.schema'
import { OnlinepottenUncheckedUpdateOneWithoutReceiptNestedInputObjectSchema } from './OnlinepottenUncheckedUpdateOneWithoutReceiptNestedInput.schema'

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
    onlinepotten: z
      .lazy(
        () =>
          OnlinepottenUncheckedUpdateOneWithoutReceiptNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export type ReceiptUncheckedUpdateWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof ReceiptUncheckedUpdateWithoutApplicationInputObjectSchema>
export const ReceiptUncheckedUpdateWithoutApplicationInputObjectSchema = Schema
