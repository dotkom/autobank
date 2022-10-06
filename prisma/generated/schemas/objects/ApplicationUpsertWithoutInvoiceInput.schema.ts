import { z } from 'zod'
import { ApplicationUpdateWithoutInvoiceInputObjectSchema } from './ApplicationUpdateWithoutInvoiceInput.schema'
import { ApplicationUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ApplicationUncheckedUpdateWithoutInvoiceInput.schema'
import { ApplicationCreateWithoutInvoiceInputObjectSchema } from './ApplicationCreateWithoutInvoiceInput.schema'
import { ApplicationUncheckedCreateWithoutInvoiceInputObjectSchema } from './ApplicationUncheckedCreateWithoutInvoiceInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => ApplicationUpdateWithoutInvoiceInputObjectSchema),
      z.lazy(() => ApplicationUncheckedUpdateWithoutInvoiceInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutInvoiceInputObjectSchema),
      z.lazy(() => ApplicationUncheckedCreateWithoutInvoiceInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationUpsertWithoutInvoiceInputObjectSchemaInfer = z.infer<
  typeof ApplicationUpsertWithoutInvoiceInputObjectSchema
>
export const ApplicationUpsertWithoutInvoiceInputObjectSchema = Schema
