import { z } from 'zod'
import { ApplicationCreateWithoutUpdatedByInputObjectSchema } from './ApplicationCreateWithoutUpdatedByInput.schema'
import { ApplicationUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ApplicationUncheckedCreateWithoutUpdatedByInput.schema'
import { ApplicationCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ApplicationCreateOrConnectWithoutUpdatedByInput.schema'
import { ApplicationCreateManyUpdatedByInputEnvelopeObjectSchema } from './ApplicationCreateManyUpdatedByInputEnvelope.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'

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
      createMany: z
        .lazy(() => ApplicationCreateManyUpdatedByInputEnvelopeObjectSchema)
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

export type ApplicationUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema
  >
export const ApplicationUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema =
  Schema
