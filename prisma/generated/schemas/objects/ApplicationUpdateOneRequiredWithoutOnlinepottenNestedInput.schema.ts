import { z } from 'zod'
import { ApplicationCreateWithoutOnlinepottenInputObjectSchema } from './ApplicationCreateWithoutOnlinepottenInput.schema'
import { ApplicationUncheckedCreateWithoutOnlinepottenInputObjectSchema } from './ApplicationUncheckedCreateWithoutOnlinepottenInput.schema'
import { ApplicationCreateOrConnectWithoutOnlinepottenInputObjectSchema } from './ApplicationCreateOrConnectWithoutOnlinepottenInput.schema'
import { ApplicationUpsertWithoutOnlinepottenInputObjectSchema } from './ApplicationUpsertWithoutOnlinepottenInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithoutOnlinepottenInputObjectSchema } from './ApplicationUpdateWithoutOnlinepottenInput.schema'
import { ApplicationUncheckedUpdateWithoutOnlinepottenInputObjectSchema } from './ApplicationUncheckedUpdateWithoutOnlinepottenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ApplicationCreateWithoutOnlinepottenInputObjectSchema),
          z.lazy(
            () => ApplicationUncheckedCreateWithoutOnlinepottenInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(
          () => ApplicationCreateOrConnectWithoutOnlinepottenInputObjectSchema
        )
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => ApplicationUpsertWithoutOnlinepottenInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => ApplicationWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => ApplicationUpdateWithoutOnlinepottenInputObjectSchema),
          z.lazy(
            () => ApplicationUncheckedUpdateWithoutOnlinepottenInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type ApplicationUpdateOneRequiredWithoutOnlinepottenNestedInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUpdateOneRequiredWithoutOnlinepottenNestedInputObjectSchema
  >
export const ApplicationUpdateOneRequiredWithoutOnlinepottenNestedInputObjectSchema =
  Schema
