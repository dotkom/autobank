import { z } from 'zod'
import { UserCreateWithoutApplicationsInputObjectSchema } from './UserCreateWithoutApplicationsInput.schema'
import { UserUncheckedCreateWithoutApplicationsInputObjectSchema } from './UserUncheckedCreateWithoutApplicationsInput.schema'
import { UserCreateOrConnectWithoutApplicationsInputObjectSchema } from './UserCreateOrConnectWithoutApplicationsInput.schema'
import { UserUpsertWithoutApplicationsInputObjectSchema } from './UserUpsertWithoutApplicationsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutApplicationsInputObjectSchema } from './UserUpdateWithoutApplicationsInput.schema'
import { UserUncheckedUpdateWithoutApplicationsInputObjectSchema } from './UserUncheckedUpdateWithoutApplicationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutApplicationsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutApplicationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutApplicationsInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => UserUpsertWithoutApplicationsInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      delete: z.boolean().optional(),
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
          z.lazy(() => UserUpdateWithoutApplicationsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutApplicationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict(),
])

export type UserUpdateOneWithoutApplicationsNestedInputObjectSchemaInfer =
  z.infer<typeof UserUpdateOneWithoutApplicationsNestedInputObjectSchema>
export const UserUpdateOneWithoutApplicationsNestedInputObjectSchema = Schema
