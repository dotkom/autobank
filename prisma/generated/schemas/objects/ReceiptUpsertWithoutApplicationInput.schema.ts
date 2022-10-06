import { z } from 'zod'
import { ReceiptUpdateWithoutApplicationInputObjectSchema } from './ReceiptUpdateWithoutApplicationInput.schema'
import { ReceiptUncheckedUpdateWithoutApplicationInputObjectSchema } from './ReceiptUncheckedUpdateWithoutApplicationInput.schema'
import { ReceiptCreateWithoutApplicationInputObjectSchema } from './ReceiptCreateWithoutApplicationInput.schema'
import { ReceiptUncheckedCreateWithoutApplicationInputObjectSchema } from './ReceiptUncheckedCreateWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => ReceiptUpdateWithoutApplicationInputObjectSchema),
      z.lazy(() => ReceiptUncheckedUpdateWithoutApplicationInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutApplicationInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutApplicationInputObjectSchema),
    ]),
  })
  .strict()

export type ReceiptUpsertWithoutApplicationInputObjectSchemaInfer = z.infer<
  typeof ReceiptUpsertWithoutApplicationInputObjectSchema
>
export const ReceiptUpsertWithoutApplicationInputObjectSchema = Schema
