import { z } from 'zod'
import { InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema'
import { InvoiceOrderByWithRelationInputObjectSchema } from './objects/InvoiceOrderByWithRelationInput.schema'
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema'

export const InvoiceAggregateSchema = z.object({
  where: InvoiceWhereInputObjectSchema.optional(),
  orderBy: InvoiceOrderByWithRelationInputObjectSchema.optional(),
  cursor: InvoiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
})
