import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    applicationId: z.string().optional(),
  })
  .strict()

export type ReceiptWhereUniqueInputObjectSchemaInfer = z.infer<
  typeof ReceiptWhereUniqueInputObjectSchema
>
export const ReceiptWhereUniqueInputObjectSchema = Schema
