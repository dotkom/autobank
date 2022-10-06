import { z } from 'zod'
import { ReceiptUpdateWithoutOnlinepottenInputObjectSchema } from './ReceiptUpdateWithoutOnlinepottenInput.schema'
import { ReceiptUncheckedUpdateWithoutOnlinepottenInputObjectSchema } from './ReceiptUncheckedUpdateWithoutOnlinepottenInput.schema'
import { ReceiptCreateWithoutOnlinepottenInputObjectSchema } from './ReceiptCreateWithoutOnlinepottenInput.schema'
import { ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema } from './ReceiptUncheckedCreateWithoutOnlinepottenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => ReceiptUpdateWithoutOnlinepottenInputObjectSchema),
      z.lazy(() => ReceiptUncheckedUpdateWithoutOnlinepottenInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutOnlinepottenInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema),
    ]),
  })
  .strict()

export type ReceiptUpsertWithoutOnlinepottenInputObjectSchemaInfer = z.infer<
  typeof ReceiptUpsertWithoutOnlinepottenInputObjectSchema
>
export const ReceiptUpsertWithoutOnlinepottenInputObjectSchema = Schema
