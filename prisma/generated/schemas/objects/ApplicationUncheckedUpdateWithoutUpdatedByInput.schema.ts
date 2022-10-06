import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { statusTypeSchema } from '../enums/statusType.schema'
import { EnumstatusTypeFieldUpdateOperationsInputObjectSchema } from './EnumstatusTypeFieldUpdateOperationsInput.schema'
import { ApplicationUpdateerror_fieldsInputObjectSchema } from './ApplicationUpdateerror_fieldsInput.schema'
import { ReceiptUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema } from './ReceiptUncheckedUpdateOneWithoutApplicationNestedInput.schema'
import { OnlinepottenUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema } from './OnlinepottenUncheckedUpdateOneWithoutApplicationNestedInput.schema'
import { InvoiceUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema } from './InvoiceUncheckedUpdateOneWithoutApplicationNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    fullname: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    approved_at: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    last_updated: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => statusTypeSchema),
        z.lazy(() => EnumstatusTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    responsible_committee: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comments: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    error: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    error_fields: z
      .union([
        z.lazy(() => ApplicationUpdateerror_fieldsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    Receipt: z
      .lazy(
        () => ReceiptUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema
      )
      .optional(),
    Onlinepotten: z
      .lazy(
        () =>
          OnlinepottenUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema
      )
      .optional(),
    Invoice: z
      .lazy(
        () => InvoiceUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export type ApplicationUncheckedUpdateWithoutUpdatedByInputObjectSchemaInfer =
  z.infer<typeof ApplicationUncheckedUpdateWithoutUpdatedByInputObjectSchema>
export const ApplicationUncheckedUpdateWithoutUpdatedByInputObjectSchema =
  Schema
