import { z } from 'zod'
import { ReceiptWhereUniqueInputObjectSchema } from './objects/ReceiptWhereUniqueInput.schema'

export const ReceiptFindUniqueSchema = z.object({
  where: ReceiptWhereUniqueInputObjectSchema,
})
