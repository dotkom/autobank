import { z } from 'zod'
import { statusTypeSchema } from '../enums/statusType.schema'
import { ApplicationCreateerror_fieldsInputObjectSchema } from './ApplicationCreateerror_fieldsInput.schema'
import { ReceiptUncheckedCreateNestedOneWithoutApplicationInputObjectSchema } from './ReceiptUncheckedCreateNestedOneWithoutApplicationInput.schema'
import { OnlinepottenUncheckedCreateNestedOneWithoutApplicationInputObjectSchema } from './OnlinepottenUncheckedCreateNestedOneWithoutApplicationInput.schema'
import { InvoiceUncheckedCreateNestedOneWithoutApplicationInputObjectSchema } from './InvoiceUncheckedCreateNestedOneWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    userId: z.string().optional().nullable(),
    fullname: z.string(),
    email: z.string(),
    created_at: z.date().optional(),
    approved_at: z.date().optional().nullable(),
    updatedById: z.string().optional().nullable(),
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
      .lazy(
        () => ReceiptUncheckedCreateNestedOneWithoutApplicationInputObjectSchema
      )
      .optional(),
    Onlinepotten: z
      .lazy(
        () =>
          OnlinepottenUncheckedCreateNestedOneWithoutApplicationInputObjectSchema
      )
      .optional(),
    Invoice: z
      .lazy(
        () => InvoiceUncheckedCreateNestedOneWithoutApplicationInputObjectSchema
      )
      .optional(),
  })
  .strict()

export type ApplicationUncheckedCreateInputObjectSchemaInfer = z.infer<
  typeof ApplicationUncheckedCreateInputObjectSchema
>
export const ApplicationUncheckedCreateInputObjectSchema = Schema
