import { z } from 'zod'
import { ReceiptCreateWithoutApplicationInputObjectSchema } from './ReceiptCreateWithoutApplicationInput.schema'
import { ReceiptUncheckedCreateWithoutApplicationInputObjectSchema } from './ReceiptUncheckedCreateWithoutApplicationInput.schema'
import { ReceiptCreateOrConnectWithoutApplicationInputObjectSchema } from './ReceiptCreateOrConnectWithoutApplicationInput.schema'
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReceiptCreateWithoutApplicationInputObjectSchema),
          z.lazy(
            () => ReceiptUncheckedCreateWithoutApplicationInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => ReceiptCreateOrConnectWithoutApplicationInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => ReceiptWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type ReceiptUncheckedCreateNestedOneWithoutApplicationInputObjectSchemaInfer =
  z.infer<
    typeof ReceiptUncheckedCreateNestedOneWithoutApplicationInputObjectSchema
  >
export const ReceiptUncheckedCreateNestedOneWithoutApplicationInputObjectSchema =
  Schema
