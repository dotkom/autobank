import { z } from 'zod'
import { UserCreateNestedOneWithoutUpdatedApplicationsInputObjectSchema } from './UserCreateNestedOneWithoutUpdatedApplicationsInput.schema'
import { statusTypeSchema } from '../enums/statusType.schema'
import { ApplicationCreateerror_fieldsInputObjectSchema } from './ApplicationCreateerror_fieldsInput.schema'
import { ReceiptCreateNestedOneWithoutApplicationInputObjectSchema } from './ReceiptCreateNestedOneWithoutApplicationInput.schema'
import { OnlinepottenCreateNestedOneWithoutApplicationInputObjectSchema } from './OnlinepottenCreateNestedOneWithoutApplicationInput.schema'
import { InvoiceCreateNestedOneWithoutApplicationInputObjectSchema } from './InvoiceCreateNestedOneWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    fullname: z.string(),
    email: z.string(),
    created_at: z.date().optional(),
    approved_at: z.date().optional().nullable(),
    updatedBy: z
      .lazy(
        () => UserCreateNestedOneWithoutUpdatedApplicationsInputObjectSchema
      )
      .optional(),
    last_updated: z.date().optional(),
    status: z.lazy(() => statusTypeSchema).optional(),
    responsible_committee: z.string().optional(),
    comments: z.string().optional().nullable(),
    error: z.string().optional().nullable(),
    error_fields: z
      .union([
        z.lazy(() => ApplicationCreateerror_fieldsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    Receipt: z
      .lazy(() => ReceiptCreateNestedOneWithoutApplicationInputObjectSchema)
      .optional(),
    Onlinepotten: z
      .lazy(
        () => OnlinepottenCreateNestedOneWithoutApplicationInputObjectSchema
      )
      .optional(),
    Invoice: z
      .lazy(() => InvoiceCreateNestedOneWithoutApplicationInputObjectSchema)
      .optional(),
  })
  .strict()

export type ApplicationCreateWithoutUserInputObjectSchemaInfer = z.infer<
  typeof ApplicationCreateWithoutUserInputObjectSchema
>
export const ApplicationCreateWithoutUserInputObjectSchema = Schema
