import { z } from 'zod'
import { ReceiptWhereInputObjectSchema } from './objects/ReceiptWhereInput.schema'
import { ReceiptOrderByWithAggregationInputObjectSchema } from './objects/ReceiptOrderByWithAggregationInput.schema'
import { ReceiptScalarWhereWithAggregatesInputObjectSchema } from './objects/ReceiptScalarWhereWithAggregatesInput.schema'
import { ReceiptScalarFieldEnumSchema } from './enums/ReceiptScalarFieldEnum.schema'

export const ReceiptGroupBySchema = z.object({
  where: ReceiptWhereInputObjectSchema.optional(),
  orderBy: ReceiptOrderByWithAggregationInputObjectSchema,
  having: ReceiptScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ReceiptScalarFieldEnumSchema),
})
