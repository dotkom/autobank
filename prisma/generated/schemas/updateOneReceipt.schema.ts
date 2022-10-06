import { z } from 'zod'
import { ReceiptUpdateInputObjectSchema } from './objects/ReceiptUpdateInput.schema'
import { ReceiptWhereUniqueInputObjectSchema } from './objects/ReceiptWhereUniqueInput.schema'

export const ReceiptUpdateOneSchema = z.object({
  data: ReceiptUpdateInputObjectSchema,
  where: ReceiptWhereUniqueInputObjectSchema,
})
