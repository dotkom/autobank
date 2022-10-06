import { z } from 'zod'
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema'
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema'
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema'
import { AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AccountUpsertWithWhereUniqueWithoutUserInput.schema'
import { AccountCreateManyUserInputEnvelopeObjectSchema } from './AccountCreateManyUserInputEnvelope.schema'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'
import { AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AccountUpdateWithWhereUniqueWithoutUserInput.schema'
import { AccountUpdateManyWithWhereWithoutUserInputObjectSchema } from './AccountUpdateManyWithWhereWithoutUserInput.schema'
import { AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputObjectSchema),
          z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema)
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
            () => AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () => AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      set: z
        .union([
          z.lazy(() => AccountWhereUniqueInputObjectSchema),
          z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputObjectSchema),
          z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      delete: z
        .union([
          z.lazy(() => AccountWhereUniqueInputObjectSchema),
          z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputObjectSchema),
          z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(
            () => AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () => AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema
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
          z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => AccountUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      deleteMany: z
        .union([
          z.lazy(() => AccountScalarWhereInputObjectSchema),
          z.lazy(() => AccountScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict(),
])

export type AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchemaInfer =
  z.infer<typeof AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema>
export const AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema
