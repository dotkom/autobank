import { z } from 'zod'
import { InvoiceCreateManyInputObjectSchema } from './objects/InvoiceCreateManyInput.schema'

export const InvoiceCreateManySchema = z.object({
  data: InvoiceCreateManyInputObjectSchema,
})
