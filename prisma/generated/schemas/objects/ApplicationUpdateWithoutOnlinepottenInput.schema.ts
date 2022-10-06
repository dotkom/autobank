import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { UserUpdateOneWithoutApplicationsNestedInputObjectSchema } from './UserUpdateOneWithoutApplicationsNestedInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { UserUpdateOneWithoutUpdatedApplicationsNestedInputObjectSchema } from './UserUpdateOneWithoutUpdatedApplicationsNestedInput.schema'
import { statusTypeSchema } from '../enums/statusType.schema'
import { EnumstatusTypeFieldUpdateOperationsInputObjectSchema } from './EnumstatusTypeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ApplicationUpdateerror_fieldsInputObjectSchema } from './ApplicationUpdateerror_fieldsInput.schema'
import { ReceiptUpdateOneWithoutApplicationNestedInputObjectSchema } from './ReceiptUpdateOneWithoutApplicationNestedInput.schema'
import { InvoiceUpdateOneWithoutApplicationNestedInputObjectSchema } from './InvoiceUpdateOneWithoutApplicationNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneWithoutApplicationsNestedInputObjectSchema)
      .optional(),
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
    updatedBy: z
      .lazy(
        () => UserUpdateOneWithoutUpdatedApplicationsNestedInputObjectSchema
      )
      .optional(),
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
      .lazy(() => ReceiptUpdateOneWithoutApplicationNestedInputObjectSchema)
      .optional(),
    Invoice: z
      .lazy(() => InvoiceUpdateOneWithoutApplicationNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export type ApplicationUpdateWithoutOnlinepottenInputObjectSchemaInfer =
  z.infer<typeof ApplicationUpdateWithoutOnlinepottenInputObjectSchema>
export const ApplicationUpdateWithoutOnlinepottenInputObjectSchema = Schema
