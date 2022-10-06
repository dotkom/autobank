import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.string().array(),
  })
  .strict()

export type ReceiptCreateappendixInputObjectSchemaInfer = z.infer<
  typeof ReceiptCreateappendixInputObjectSchema
>
export const ReceiptCreateappendixInputObjectSchema = Schema
