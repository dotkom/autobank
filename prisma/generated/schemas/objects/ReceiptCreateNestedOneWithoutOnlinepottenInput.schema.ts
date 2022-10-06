import { z } from 'zod'
import { ReceiptCreateWithoutOnlinepottenInputObjectSchema } from './ReceiptCreateWithoutOnlinepottenInput.schema'
import { ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema } from './ReceiptUncheckedCreateWithoutOnlinepottenInput.schema'
import { ReceiptCreateOrConnectWithoutOnlinepottenInputObjectSchema } from './ReceiptCreateOrConnectWithoutOnlinepottenInput.schema'
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReceiptCreateWithoutOnlinepottenInputObjectSchema),
          z.lazy(
            () => ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => ReceiptCreateOrConnectWithoutOnlinepottenInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => ReceiptWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type ReceiptCreateNestedOneWithoutOnlinepottenInputObjectSchemaInfer =
  z.infer<typeof ReceiptCreateNestedOneWithoutOnlinepottenInputObjectSchema>
export const ReceiptCreateNestedOneWithoutOnlinepottenInputObjectSchema = Schema
