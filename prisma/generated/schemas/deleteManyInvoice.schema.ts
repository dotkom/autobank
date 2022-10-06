import { z } from 'zod'
import { InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema'

export const InvoiceDeleteManySchema = z.object({
  where: InvoiceWhereInputObjectSchema.optional(),
})
