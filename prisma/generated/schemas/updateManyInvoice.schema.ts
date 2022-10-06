import { z } from 'zod'
import { InvoiceUpdateManyMutationInputObjectSchema } from './objects/InvoiceUpdateManyMutationInput.schema'
import { InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema'

export const InvoiceUpdateManySchema = z.object({
  data: InvoiceUpdateManyMutationInputObjectSchema,
  where: InvoiceWhereInputObjectSchema.optional(),
})
