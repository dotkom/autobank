import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
  })
  .strict()

export type ReceiptUpdateappendixInputObjectSchemaInfer = z.infer<
  typeof ReceiptUpdateappendixInputObjectSchema
>
export const ReceiptUpdateappendixInputObjectSchema = Schema
