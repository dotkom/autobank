import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { statusTypeSchema } from '../enums/statusType.schema'
import { EnumstatusTypeFieldUpdateOperationsInputObjectSchema } from './EnumstatusTypeFieldUpdateOperationsInput.schema'
import { ApplicationUpdateerror_fieldsInputObjectSchema } from './ApplicationUpdateerror_fieldsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
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
    updatedById: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
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
  })
  .strict()

export type ApplicationUncheckedUpdateManyWithoutApplicationsInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUncheckedUpdateManyWithoutApplicationsInputObjectSchema
  >
export const ApplicationUncheckedUpdateManyWithoutApplicationsInputObjectSchema =
  Schema
