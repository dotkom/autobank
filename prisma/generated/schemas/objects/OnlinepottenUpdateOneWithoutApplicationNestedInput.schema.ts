import { z } from 'zod'
import { OnlinepottenCreateWithoutApplicationInputObjectSchema } from './OnlinepottenCreateWithoutApplicationInput.schema'
import { OnlinepottenUncheckedCreateWithoutApplicationInputObjectSchema } from './OnlinepottenUncheckedCreateWithoutApplicationInput.schema'
import { OnlinepottenCreateOrConnectWithoutApplicationInputObjectSchema } from './OnlinepottenCreateOrConnectWithoutApplicationInput.schema'
import { OnlinepottenUpsertWithoutApplicationInputObjectSchema } from './OnlinepottenUpsertWithoutApplicationInput.schema'
import { OnlinepottenWhereUniqueInputObjectSchema } from './OnlinepottenWhereUniqueInput.schema'
import { OnlinepottenUpdateWithoutApplicationInputObjectSchema } from './OnlinepottenUpdateWithoutApplicationInput.schema'
import { OnlinepottenUncheckedUpdateWithoutApplicationInputObjectSchema } from './OnlinepottenUncheckedUpdateWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => OnlinepottenCreateWithoutApplicationInputObjectSchema),
          z.lazy(
            () => OnlinepottenUncheckedCreateWithoutApplicationInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(
          () => OnlinepottenCreateOrConnectWithoutApplicationInputObjectSchema
        )
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => OnlinepottenUpsertWithoutApplicationInputObjectSchema)
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
          z.lazy(() => OnlinepottenUpdateWithoutApplicationInputObjectSchema),
          z.lazy(
            () => OnlinepottenUncheckedUpdateWithoutApplicationInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type OnlinepottenUpdateOneWithoutApplicationNestedInputObjectSchemaInfer =
  z.infer<typeof OnlinepottenUpdateOneWithoutApplicationNestedInputObjectSchema>
export const OnlinepottenUpdateOneWithoutApplicationNestedInputObjectSchema =
  Schema
