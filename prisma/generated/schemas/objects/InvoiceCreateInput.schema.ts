import { z } from 'zod'
import { ApplicationCreateNestedOneWithoutInvoiceInputObjectSchema } from './ApplicationCreateNestedOneWithoutInvoiceInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    orgnr: z.string(),
    occasion: z.string(),
    method: z.string().optional(),
    po_nr: z.string().optional().nullable(),
    duedays: z.number().optional(),
    application: z.lazy(
      () => ApplicationCreateNestedOneWithoutInvoiceInputObjectSchema
    ),
  })
  .strict()

export type InvoiceCreateInputObjectSchemaInfer = z.infer<
  typeof InvoiceCreateInputObjectSchema
>
export const InvoiceCreateInputObjectSchema = Schema
