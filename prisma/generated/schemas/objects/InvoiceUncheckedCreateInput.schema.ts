import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    orgnr: z.string(),
    occasion: z.string(),
    method: z.string().optional(),
    po_nr: z.string().optional().nullable(),
    duedays: z.number().optional(),
    applicationId: z.string(),
  })
  .strict()

export type InvoiceUncheckedCreateInputObjectSchemaInfer = z.infer<
  typeof InvoiceUncheckedCreateInputObjectSchema
>
export const InvoiceUncheckedCreateInputObjectSchema = Schema
