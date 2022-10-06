import { z } from 'zod'
import { ReceiptWhereInputObjectSchema } from './objects/ReceiptWhereInput.schema'

export const ReceiptDeleteManySchema = z.object({
  where: ReceiptWhereInputObjectSchema.optional(),
})
