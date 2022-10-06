import { z } from 'zod'
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema'
import { ReceiptCreateWithoutApplicationInputObjectSchema } from './ReceiptCreateWithoutApplicationInput.schema'
import { ReceiptUncheckedCreateWithoutApplicationInputObjectSchema } from './ReceiptUncheckedCreateWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutApplicationInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutApplicationInputObjectSchema),
    ]),
  })
  .strict()

export type ReceiptCreateOrConnectWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof ReceiptCreateOrConnectWithoutApplicationInputObjectSchema>
export const ReceiptCreateOrConnectWithoutApplicationInputObjectSchema = Schema
