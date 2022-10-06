import { z } from 'zod'
import { ReceiptUpdateManyMutationInputObjectSchema } from './objects/ReceiptUpdateManyMutationInput.schema'
import { ReceiptWhereInputObjectSchema } from './objects/ReceiptWhereInput.schema'

export const ReceiptUpdateManySchema = z.object({
  data: ReceiptUpdateManyMutationInputObjectSchema,
  where: ReceiptWhereInputObjectSchema.optional(),
})
