import { z } from 'zod'
import { ReceiptWhereUniqueInputObjectSchema } from './objects/ReceiptWhereUniqueInput.schema'
import { ReceiptCreateInputObjectSchema } from './objects/ReceiptCreateInput.schema'
import { ReceiptUpdateInputObjectSchema } from './objects/ReceiptUpdateInput.schema'

export const ReceiptUpsertSchema = z.object({
  where: ReceiptWhereUniqueInputObjectSchema,
  create: ReceiptCreateInputObjectSchema,
  update: ReceiptUpdateInputObjectSchema,
})
