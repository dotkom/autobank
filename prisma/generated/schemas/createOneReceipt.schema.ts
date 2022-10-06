import { z } from 'zod'
import { ReceiptCreateInputObjectSchema } from './objects/ReceiptCreateInput.schema'

export const ReceiptCreateOneSchema = z.object({
  data: ReceiptCreateInputObjectSchema,
})
