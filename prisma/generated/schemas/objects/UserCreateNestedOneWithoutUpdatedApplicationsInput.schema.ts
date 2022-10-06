import { z } from 'zod'
import { UserCreateWithoutUpdatedApplicationsInputObjectSchema } from './UserCreateWithoutUpdatedApplicationsInput.schema'
import { UserUncheckedCreateWithoutUpdatedApplicationsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedApplicationsInput.schema'
import { UserCreateOrConnectWithoutUpdatedApplicationsInputObjectSchema } from './UserCreateOrConnectWithoutUpdatedApplicationsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type UserCreateNestedOneWithoutUpdatedApplicationsInputObjectSchemaInfer =
  z.infer<typeof UserCreateNestedOneWithoutUpdatedApplicationsInputObjectSchema>
export const UserCreateNestedOneWithoutUpdatedApplicationsInputObjectSchema =
  Schema
