import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { ApplicationRelationFilterObjectSchema } from './ApplicationRelationFilter.schema'
import { ApplicationWhereInputObjectSchema } from './ApplicationWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceWhereInputObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceWhereInputObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    orgnr: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    occasion: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    method: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    po_nr: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    duedays: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    application: z
      .union([
        z.lazy(() => ApplicationRelationFilterObjectSchema),
        z.lazy(() => ApplicationWhereInputObjectSchema),
      ])
      .optional(),
    applicationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export type InvoiceWhereInputObjectSchemaInfer = z.infer<
  typeof InvoiceWhereInputObjectSchema
>
export const InvoiceWhereInputObjectSchema = Schema
