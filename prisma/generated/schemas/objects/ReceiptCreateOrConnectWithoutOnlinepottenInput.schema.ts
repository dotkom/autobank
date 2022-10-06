import { z } from 'zod'
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema'
import { ReceiptCreateWithoutOnlinepottenInputObjectSchema } from './ReceiptCreateWithoutOnlinepottenInput.schema'
import { ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema } from './ReceiptUncheckedCreateWithoutOnlinepottenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutOnlinepottenInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema),
    ]),
  })
  .strict()

export type ReceiptCreateOrConnectWithoutOnlinepottenInputObjectSchemaInfer =
  z.infer<typeof ReceiptCreateOrConnectWithoutOnlinepottenInputObjectSchema>
export const ReceiptCreateOrConnectWithoutOnlinepottenInputObjectSchema = Schema
