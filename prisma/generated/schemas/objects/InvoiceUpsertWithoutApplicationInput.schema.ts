import { z } from 'zod'
import { InvoiceUpdateWithoutApplicationInputObjectSchema } from './InvoiceUpdateWithoutApplicationInput.schema'
import { InvoiceUncheckedUpdateWithoutApplicationInputObjectSchema } from './InvoiceUncheckedUpdateWithoutApplicationInput.schema'
import { InvoiceCreateWithoutApplicationInputObjectSchema } from './InvoiceCreateWithoutApplicationInput.schema'
import { InvoiceUncheckedCreateWithoutApplicationInputObjectSchema } from './InvoiceUncheckedCreateWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => InvoiceUpdateWithoutApplicationInputObjectSchema),
      z.lazy(() => InvoiceUncheckedUpdateWithoutApplicationInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutApplicationInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutApplicationInputObjectSchema),
    ]),
  })
  .strict()

export type InvoiceUpsertWithoutApplicationInputObjectSchemaInfer = z.infer<
  typeof InvoiceUpsertWithoutApplicationInputObjectSchema
>
export const InvoiceUpsertWithoutApplicationInputObjectSchema = Schema
