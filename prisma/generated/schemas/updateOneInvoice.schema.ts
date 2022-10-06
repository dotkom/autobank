import { z } from 'zod'
import { InvoiceUpdateInputObjectSchema } from './objects/InvoiceUpdateInput.schema'
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema'

export const InvoiceUpdateOneSchema = z.object({
  data: InvoiceUpdateInputObjectSchema,
  where: InvoiceWhereUniqueInputObjectSchema,
})
