import { z } from 'zod'
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'
import { UserCreateOrConnectWithoutAccountsInputObjectSchema } from './UserCreateOrConnectWithoutAccountsInput.schema'
import { UserUpsertWithoutAccountsInputObjectSchema } from './UserUpsertWithoutAccountsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema'
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAccountsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAccountsInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => UserUpsertWithoutAccountsInputObjectSchema)
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
          z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export type UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchemaInfer =
  z.infer<typeof UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema>
export const UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema =
  Schema
