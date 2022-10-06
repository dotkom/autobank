import { z } from 'zod'
import { OnlinepottenCreateWithoutReceiptInputObjectSchema } from './OnlinepottenCreateWithoutReceiptInput.schema'
import { OnlinepottenUncheckedCreateWithoutReceiptInputObjectSchema } from './OnlinepottenUncheckedCreateWithoutReceiptInput.schema'
import { OnlinepottenCreateOrConnectWithoutReceiptInputObjectSchema } from './OnlinepottenCreateOrConnectWithoutReceiptInput.schema'
import { OnlinepottenUpsertWithoutReceiptInputObjectSchema } from './OnlinepottenUpsertWithoutReceiptInput.schema'
import { OnlinepottenWhereUniqueInputObjectSchema } from './OnlinepottenWhereUniqueInput.schema'
import { OnlinepottenUpdateWithoutReceiptInputObjectSchema } from './OnlinepottenUpdateWithoutReceiptInput.schema'
import { OnlinepottenUncheckedUpdateWithoutReceiptInputObjectSchema } from './OnlinepottenUncheckedUpdateWithoutReceiptInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => OnlinepottenCreateWithoutReceiptInputObjectSchema),
          z.lazy(
            () => OnlinepottenUncheckedCreateWithoutReceiptInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => OnlinepottenCreateOrConnectWithoutReceiptInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => OnlinepottenUpsertWithoutReceiptInputObjectSchema)
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
      connect: z
        .lazy(() => OnlinepottenWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => OnlinepottenUpdateWithoutReceiptInputObjectSchema),
          z.lazy(
            () => OnlinepottenUncheckedUpdateWithoutReceiptInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type OnlinepottenUpdateOneWithoutReceiptNestedInputObjectSchemaInfer =
  z.infer<typeof OnlinepottenUpdateOneWithoutReceiptNestedInputObjectSchema>
export const OnlinepottenUpdateOneWithoutReceiptNestedInputObjectSchema = Schema
