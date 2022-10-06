import { z } from 'zod'
import { ReceiptCreateWithoutOnlinepottenInputObjectSchema } from './ReceiptCreateWithoutOnlinepottenInput.schema'
import { ReceiptUncheckedCreateWithoutOnlinepottenInputObjectSchema } from './ReceiptUncheckedCreateWithoutOnlinepottenInput.schema'
import { ReceiptCreateOrConnectWithoutOnlinepottenInputObjectSchema } from './ReceiptCreateOrConnectWithoutOnlinepottenInput.schema'
import { ReceiptUpsertWithoutOnlinepottenInputObjectSchema } from './ReceiptUpsertWithoutOnlinepottenInput.schema'
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema'
import { ReceiptUpdateWithoutOnlinepottenInputObjectSchema } from './ReceiptUpdateWithoutOnlinepottenInput.schema'
import { ReceiptUncheckedUpdateWithoutOnlinepottenInputObjectSchema } from './ReceiptUncheckedUpdateWithoutOnlinepottenInput.schema'

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
      upsert: z
        .lazy(() => ReceiptUpsertWithoutOnlinepottenInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      delete: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => ReceiptWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => ReceiptUpdateWithoutOnlinepottenInputObjectSchema),
          z.lazy(
            () => ReceiptUncheckedUpdateWithoutOnlinepottenInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type ReceiptUpdateOneWithoutOnlinepottenNestedInputObjectSchemaInfer =
  z.infer<typeof ReceiptUpdateOneWithoutOnlinepottenNestedInputObjectSchema>
export const ReceiptUpdateOneWithoutOnlinepottenNestedInputObjectSchema = Schema
