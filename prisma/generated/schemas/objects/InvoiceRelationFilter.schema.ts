import { z } from 'zod'
import { InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    is: z
      .lazy(() => InvoiceWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => InvoiceWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export type InvoiceRelationFilterObjectSchemaInfer = z.infer<
  typeof InvoiceRelationFilterObjectSchema
>
export const InvoiceRelationFilterObjectSchema = Schema
