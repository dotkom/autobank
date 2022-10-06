import { z } from 'zod'
import { UserCreateWithoutUpdatedApplicationsInputObjectSchema } from './UserCreateWithoutUpdatedApplicationsInput.schema'
import { UserUncheckedCreateWithoutUpdatedApplicationsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedApplicationsInput.schema'
import { UserCreateOrConnectWithoutUpdatedApplicationsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedApplicationsInput.schema'
import { UserUpsertWithoutUpdatedApplicationsInputObjectSchema } from './UserUpsertWithoutUpdatedApplicationsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutUpdatedApplicationsInputObjectSchema } from './UserUpdateWithoutUpdatedApplicationsInput.schema'
import { UserUncheckedUpdateWithoutUpdatedApplicationsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedApplicationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutUpdatedApplicationsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutUpdatedApplicationsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutUpdatedApplicationsInputObjectSchema
        )
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => UserUpsertWithoutUpdatedApplicationsInputObjectSchema)
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
          z.lazy(() => UserUpdateWithoutUpdatedApplicationsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutUpdatedApplicationsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type UserUpdateOneWithoutUpdatedApplicationsNestedInputObjectSchemaInfer =
  z.infer<typeof UserUpdateOneWithoutUpdatedApplicationsNestedInputObjectSchema>
export const UserUpdateOneWithoutUpdatedApplicationsNestedInputObjectSchema =
  Schema
