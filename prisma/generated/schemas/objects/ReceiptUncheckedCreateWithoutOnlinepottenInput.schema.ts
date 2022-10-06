import { z } from 'zod'
import { receiptTypeSchema } from '../enums/receiptType.schema'
import { ReceiptCreateappendixInputObjectSchema } from './ReceiptCreateappendixInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => receiptTypeSchema),
    account: z.string().optional().nullable(),
    card: z.string().optional().nullable(),
    paid_at: z.date().optional().nullable(),
    amount: z.number(),
    occasion: z.string(),
    appendix: z
      .union([
        z.lazy(() => ReceiptCreateappendixInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    applicationId: z.string(),
  })
  .strict()

export type ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchemaInfer =
  z.infer<typeof ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema>
export const ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema = Schema