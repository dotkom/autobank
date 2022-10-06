import { z } from 'zod'
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema'

export const InvoiceFindUniqueSchema = z.object({
  where: InvoiceWhereUniqueInputObjectSchema,
})
