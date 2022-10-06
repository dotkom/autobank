import { z } from 'zod'
import { ReceiptCreateWithoutApplicationInputObjectSchema } from './ReceiptCreateWithoutApplicationInput.schema'
import { ReceiptUncheckedCreateWithoutApplicationInputObjectSchema } from './ReceiptUncheckedCreateWithoutApplicationInput.schema'
import { ReceiptCreateOrConnectWithoutApplicationInputObjectSchema } from './ReceiptCreateOrConnectWithoutApplicationInput.schema'
import { ReceiptUpsertWithoutApplicationInputObjectSchema } from './ReceiptUpsertWithoutApplicationInput.schema'
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema'
import { ReceiptUpdateWithoutApplicationInputObjectSchema } from './ReceiptUpdateWithoutApplicationInput.schema'
import { ReceiptUncheckedUpdateWithoutApplicationInputObjectSchema } from './ReceiptUncheckedUpdateWithoutApplicationInput.schema'

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
      upsert: z
        .lazy(() => ReceiptUpsertWithoutApplicationInputObjectSchema)
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
          z.lazy(() => ReceiptUpdateWithoutApplicationInputObjectSchema),
          z.lazy(
            () => ReceiptUncheckedUpdateWithoutApplicationInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type ReceiptUncheckedUpdateOneWithoutApplicationNestedInputObjectSchemaInfer =
  z.infer<
    typeof ReceiptUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema
  >
export const ReceiptUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema =
  Schema
