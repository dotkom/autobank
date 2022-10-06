import { z } from 'zod'
import { ApplicationUpdateWithoutReceiptInputObjectSchema } from './ApplicationUpdateWithoutReceiptInput.schema'
import { ApplicationUncheckedUpdateWithoutReceiptInputObjectSchema } from './ApplicationUncheckedUpdateWithoutReceiptInput.schema'
import { ApplicationCreateWithoutReceiptInputObjectSchema } from './ApplicationCreateWithoutReceiptInput.schema'
import { ApplicationUncheckedCreateWithoutReceiptInputObjectSchema } from './ApplicationUncheckedCreateWithoutReceiptInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => ApplicationUpdateWithoutReceiptInputObjectSchema),
      z.lazy(() => ApplicationUncheckedUpdateWithoutReceiptInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => ApplicationUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationUpsertWithoutReceiptInputObjectSchemaInfer = z.infer<
  typeof ApplicationUpsertWithoutReceiptInputObjectSchema
>
export const ApplicationUpsertWithoutReceiptInputObjectSchema = Schema
