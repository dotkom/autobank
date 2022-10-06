import { z } from 'zod'
import { OnlinepottenCreateWithoutApplicationInputObjectSchema } from './OnlinepottenCreateWithoutApplicationInput.schema'
import { OnlinepottenUncheckedCreateWithoutApplicationInputObjectSchema } from './OnlinepottenUncheckedCreateWithoutApplicationInput.schema'
import { OnlinepottenCreateOrConnectWithoutApplicationInputObjectSchema } from './OnlinepottenCreateOrConnectWithoutApplicationInput.schema'
import { OnlinepottenWhereUniqueInputObjectSchema } from './OnlinepottenWhereUniqueInput.schema'

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
      connect: z
        .lazy(() => OnlinepottenWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict(),
])

export type OnlinepottenUncheckedCreateNestedOneWithoutApplicationInputObjectSchemaInfer =
  z.infer<
    typeof OnlinepottenUncheckedCreateNestedOneWithoutApplicationInputObjectSchema
  >
export const OnlinepottenUncheckedCreateNestedOneWithoutApplicationInputObjectSchema =
  Schema
