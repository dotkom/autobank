import { z } from 'zod'
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from './SessionCreateOrConnectWithoutUserInput.schema'
import { SessionCreateManyUserInputEnvelopeObjectSchema } from './SessionCreateManyUserInputEnvelope.schema'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
          z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputObjectSchema),
          z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export type SessionUncheckedCreateNestedManyWithoutUserInputObjectSchemaInfer =
  z.infer<typeof SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema>
export const SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema
