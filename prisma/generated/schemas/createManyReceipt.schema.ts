import { z } from 'zod'
import { ReceiptCreateManyInputObjectSchema } from './objects/ReceiptCreateManyInput.schema'

export const ReceiptCreateManySchema = z.object({
  data: ReceiptCreateManyInputObjectSchema,
})
