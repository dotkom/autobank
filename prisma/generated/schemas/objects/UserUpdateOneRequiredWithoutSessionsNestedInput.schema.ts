import { z } from 'zod'
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema'
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'
import { UserCreateOrConnectWithoutSessionsInputObjectSchema } from './UserCreateOrConnectWithoutSessionsInput.schema'
import { UserUpsertWithoutSessionsInputObjectSchema } from './UserUpsertWithoutSessionsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema'
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSessionsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutSessionsInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => UserUpsertWithoutSessionsInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export type UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchemaInfer =
  z.infer<typeof UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema>
export const UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema =
  Schema
