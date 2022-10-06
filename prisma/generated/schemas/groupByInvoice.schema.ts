import { z } from 'zod'
import { InvoiceWhereInputObjectSchema } from './objects/InvoiceWhereInput.schema'
import { InvoiceOrderByWithAggregationInputObjectSchema } from './objects/InvoiceOrderByWithAggregationInput.schema'
import { InvoiceScalarWhereWithAggregatesInputObjectSchema } from './objects/InvoiceScalarWhereWithAggregatesInput.schema'
import { InvoiceScalarFieldEnumSchema } from './enums/InvoiceScalarFieldEnum.schema'

export const InvoiceGroupBySchema = z.object({
  where: InvoiceWhereInputObjectSchema.optional(),
  orderBy: InvoiceOrderByWithAggregationInputObjectSchema,
  having: InvoiceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(InvoiceScalarFieldEnumSchema),
})
