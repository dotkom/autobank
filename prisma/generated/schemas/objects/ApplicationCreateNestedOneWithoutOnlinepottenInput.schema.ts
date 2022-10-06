import { z } from 'zod'
import { ApplicationCreateWithoutOnlinepottenInputObjectSchema } from './ApplicationCreateWithoutOnlinepottenInput.schema'
import { ApplicationUncheckedCreateWithoutOnlinepottenInputObjectSchema } from './ApplicationUncheckedCreateWithoutOnlinepottenInput.schema'
import { ApplicationCreateOrConnectWithoutOnlinepottenInputObjectSchema } from './ApplicationCreateOrConnectWithoutOnlinepottenInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'

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
      connect: z.lazy(() => ApplicationWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type ApplicationCreateNestedOneWithoutOnlinepottenInputObjectSchemaInfer =
  z.infer<typeof ApplicationCreateNestedOneWithoutOnlinepottenInputObjectSchema>
export const ApplicationCreateNestedOneWithoutOnlinepottenInputObjectSchema =
  Schema
