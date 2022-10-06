import { z } from 'zod'
import { receiptTypeSchema } from '../enums/receiptType.schema'
import { ReceiptCreateappendixInputObjectSchema } from './ReceiptCreateappendixInput.schema'
import { OnlinepottenUncheckedCreateNestedOneWithoutReceiptInputObjectSchema } from './OnlinepottenUncheckedCreateNestedOneWithoutReceiptInput.schema'

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
    onlinepotten: z
      .lazy(
        () =>
          OnlinepottenUncheckedCreateNestedOneWithoutReceiptInputObjectSchema
      )
      .optional(),
  })
  .strict()

export type ReceiptUncheckedCreateWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof ReceiptUncheckedCreateWithoutApplicationInputObjectSchema>
export const ReceiptUncheckedCreateWithoutApplicationInputObjectSchema = Schema
