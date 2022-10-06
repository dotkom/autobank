import { z } from 'zod'
import { ApplicationCreateWithoutUserInputObjectSchema } from './ApplicationCreateWithoutUserInput.schema'
import { ApplicationUncheckedCreateWithoutUserInputObjectSchema } from './ApplicationUncheckedCreateWithoutUserInput.schema'
import { ApplicationCreateOrConnectWithoutUserInputObjectSchema } from './ApplicationCreateOrConnectWithoutUserInput.schema'
import { ApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ApplicationUpsertWithWhereUniqueWithoutUserInput.schema'
import { ApplicationCreateManyUserInputEnvelopeObjectSchema } from './ApplicationCreateManyUserInputEnvelope.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ApplicationUpdateWithWhereUniqueWithoutUserInput.schema'
import { ApplicationUpdateManyWithWhereWithoutUserInputObjectSchema } from './ApplicationUpdateManyWithWhereWithoutUserInput.schema'
import { ApplicationScalarWhereInputObjectSchema } from './ApplicationScalarWhereInput.schema'

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
      upsert: z
        .union([
          z.lazy(
            () => ApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () => ApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema
            )
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
      set: z
        .union([
          z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
          z.lazy(() => ApplicationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([
          z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
          z.lazy(() => ApplicationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([
          z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
          z.lazy(() => ApplicationWhereUniqueInputObjectSchema).array(),
        ])
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
  z
    .object({
      update: z
        .union([
          z.lazy(
            () => ApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () => ApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      updateMany: z
        .union([
          z.lazy(
            () => ApplicationUpdateManyWithWhereWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () => ApplicationUpdateManyWithWhereWithoutUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([
          z.lazy(() => ApplicationScalarWhereInputObjectSchema),
          z.lazy(() => ApplicationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export type ApplicationUpdateManyWithoutUserNestedInputObjectSchemaInfer =
  z.infer<typeof ApplicationUpdateManyWithoutUserNestedInputObjectSchema>
export const ApplicationUpdateManyWithoutUserNestedInputObjectSchema = Schema
