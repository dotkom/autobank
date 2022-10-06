import { z } from 'zod'
import { ApplicationCreateWithoutUpdatedByInputObjectSchema } from './ApplicationCreateWithoutUpdatedByInput.schema'
import { ApplicationUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ApplicationUncheckedCreateWithoutUpdatedByInput.schema'
import { ApplicationCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ApplicationCreateOrConnectWithoutUpdatedByInput.schema'
import { ApplicationUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ApplicationUpsertWithWhereUniqueWithoutUpdatedByInput.schema'
import { ApplicationCreateManyUpdatedByInputEnvelopeObjectSchema } from './ApplicationCreateManyUpdatedByInputEnvelope.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ApplicationUpdateWithWhereUniqueWithoutUpdatedByInput.schema'
import { ApplicationUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ApplicationUpdateManyWithWhereWithoutUpdatedByInput.schema'
import { ApplicationScalarWhereInputObjectSchema } from './ApplicationScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ApplicationCreateWithoutUpdatedByInputObjectSchema),
          z
            .lazy(() => ApplicationCreateWithoutUpdatedByInputObjectSchema)
            .array(),
          z.lazy(
            () => ApplicationUncheckedCreateWithoutUpdatedByInputObjectSchema
          ),
          z
            .lazy(
              () => ApplicationUncheckedCreateWithoutUpdatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(
            () => ApplicationCreateOrConnectWithoutUpdatedByInputObjectSchema
          ),
          z
            .lazy(
              () => ApplicationCreateOrConnectWithoutUpdatedByInputObjectSchema
            )
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
            () =>
              ApplicationUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ApplicationUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z
        .lazy(() => ApplicationCreateManyUpdatedByInputEnvelopeObjectSchema)
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
            () =>
              ApplicationUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ApplicationUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema
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
            () =>
              ApplicationUpdateManyWithWhereWithoutUpdatedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ApplicationUpdateManyWithWhereWithoutUpdatedByInputObjectSchema
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

export type ApplicationUpdateManyWithoutUpdatedByNestedInputObjectSchemaInfer =
  z.infer<typeof ApplicationUpdateManyWithoutUpdatedByNestedInputObjectSchema>
export const ApplicationUpdateManyWithoutUpdatedByNestedInputObjectSchema =
  Schema
