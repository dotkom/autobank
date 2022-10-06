import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { roleSchema } from '../enums/role.schema'
import { EnumroleFieldUpdateOperationsInputObjectSchema } from './EnumroleFieldUpdateOperationsInput.schema'
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema'
import { ApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ApplicationUncheckedUpdateManyWithoutUserNestedInput.schema'
import { ApplicationUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ApplicationUncheckedUpdateManyWithoutUpdatedByNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    role: z
      .union([
        z.lazy(() => roleSchema),
        z.lazy(() => EnumroleFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    accounts: z
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    applications: z
      .lazy(
        () => ApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema
      )
      .optional(),
    updatedApplications: z
      .lazy(
        () =>
          ApplicationUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export type UserUncheckedUpdateWithoutSessionsInputObjectSchemaInfer = z.infer<
  typeof UserUncheckedUpdateWithoutSessionsInputObjectSchema
>
export const UserUncheckedUpdateWithoutSessionsInputObjectSchema = Schema