import { z } from 'zod'
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema'
import { InvoiceCreateInputObjectSchema } from './objects/InvoiceCreateInput.schema'
import { InvoiceUpdateInputObjectSchema } from './objects/InvoiceUpdateInput.schema'

export const InvoiceUpsertSchema = z.object({
  where: InvoiceWhereUniqueInputObjectSchema,
  create: InvoiceCreateInputObjectSchema,
  update: InvoiceUpdateInputObjectSchema,
})
