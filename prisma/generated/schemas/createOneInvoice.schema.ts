import { z } from 'zod'
import { InvoiceCreateInputObjectSchema } from './objects/InvoiceCreateInput.schema'

export const InvoiceCreateOneSchema = z.object({
  data: InvoiceCreateInputObjectSchema,
})
