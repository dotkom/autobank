import { z } from 'zod'
import { ApplicationCreateWithoutUserInputObjectSchema } from './ApplicationCreateWithoutUserInput.schema'
import { ApplicationUncheckedCreateWithoutUserInputObjectSchema } from './ApplicationUncheckedCreateWithoutUserInput.schema'
import { ApplicationCreateOrConnectWithoutUserInputObjectSchema } from './ApplicationCreateOrConnectWithoutUserInput.schema'
import { ApplicationCreateManyUserInputEnvelopeObjectSchema } from './ApplicationCreateManyUserInputEnvelope.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ApplicationCreateWithoutUserInputObjectSchema),
          z.lazy(() => ApplicationCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ApplicationUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ApplicationUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => ApplicationCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ApplicationCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z
        .lazy(() => ApplicationCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
          z.lazy(() => ApplicationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export type ApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema
  >
export const ApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema
