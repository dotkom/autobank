import { z } from 'zod'
import { ReceiptWhereInputObjectSchema } from './objects/ReceiptWhereInput.schema'
import { ReceiptOrderByWithRelationInputObjectSchema } from './objects/ReceiptOrderByWithRelationInput.schema'
import { ReceiptWhereUniqueInputObjectSchema } from './objects/ReceiptWhereUniqueInput.schema'
import { ReceiptScalarFieldEnumSchema } from './enums/ReceiptScalarFieldEnum.schema'

export const ReceiptFindFirstSchema = z.object({
  where: ReceiptWhereInputObjectSchema.optional(),
  orderBy: ReceiptOrderByWithRelationInputObjectSchema.optional(),
  cursor: ReceiptWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ReceiptScalarFieldEnumSchema).optional(),
})
