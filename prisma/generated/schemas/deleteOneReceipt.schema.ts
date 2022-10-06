import { z } from 'zod'
import { ReceiptWhereUniqueInputObjectSchema } from './objects/ReceiptWhereUniqueInput.schema'

export const ReceiptDeleteOneSchema = z.object({
  where: ReceiptWhereUniqueInputObjectSchema,
})
