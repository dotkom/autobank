import { z } from 'zod'
import { InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema'
import { InvoiceOrderByWithRelationInputObjectSchema } from './objects/InvoiceOrderByWithRelationInput.schema'
import { InvoiceWhereUniqueInputObjectSchema } from './objects/InvoiceWhereUniqueInput.schema'
import { InvoiceScalarFieldEnumSchema } from './enums/InvoiceScalarFieldEnum.schema'

export const InvoiceFindFirstSchema = z.object({
  where: InvoiceWhereInputObjectSchema.optional(),
  orderBy: InvoiceOrderByWithRelationInputObjectSchema.optional(),
  cursor: InvoiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InvoiceScalarFieldEnumSchema).optional(),
})
