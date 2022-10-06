import { z } from 'zod'
import { OnlinepottenUpdateWithoutReceiptInputObjectSchema } from './OnlinepottenUpdateWithoutReceiptInput.schema'
import { OnlinepottenUncheckedUpdateWithoutReceiptInputObjectSchema } from './OnlinepottenUncheckedUpdateWithoutReceiptInput.schema'
import { OnlinepottenCreateWithoutReceiptInputObjectSchema } from './OnlinepottenCreateWithoutReceiptInput.schema'
import { OnlinepottenUncheckedCreateWithoutReceiptInputObjectSchema } from './OnlinepottenUncheckedCreateWithoutReceiptInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => OnlinepottenUpdateWithoutReceiptInputObjectSchema),
      z.lazy(() => OnlinepottenUncheckedUpdateWithoutReceiptInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => OnlinepottenCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => OnlinepottenUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict()

export type OnlinepottenUpsertWithoutReceiptInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenUpsertWithoutReceiptInputObjectSchema
>
export const OnlinepottenUpsertWithoutReceiptInputObjectSchema = Schema
