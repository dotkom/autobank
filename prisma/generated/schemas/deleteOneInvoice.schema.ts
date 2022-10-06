import { z } from 'zod'
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema'

export const InvoiceDeleteOneSchema = z.object({
  where: InvoiceWhereUniqueInputObjectSchema,
})
