import { z } from 'zod'
import { ReceiptWhereInputObjectSchema } from './ReceiptWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    is: z
      .lazy(() => ReceiptWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ReceiptWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export type ReceiptRelationFilterObjectSchemaInfer = z.infer<
  typeof ReceiptRelationFilterObjectSchema
>
export const ReceiptRelationFilterObjectSchema = Schema
