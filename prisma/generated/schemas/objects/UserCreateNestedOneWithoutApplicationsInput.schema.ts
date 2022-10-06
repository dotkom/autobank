import { z } from 'zod'
import { UserCreateWithoutApplicationsInputObjectSchema } from './UserCreateWithoutApplicationsInput.schema'
import { UserUncheckedCreateWithoutApplicationsInputObjectSchema } from './UserUncheckedCreateWithoutApplicationsInput.schema'
import { UserCreateOrConnectWithoutApplicationsInputObjectSchema } from './UserCreateOrConnectWithoutApplicationsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type UserCreateNestedOneWithoutApplicationsInputObjectSchemaInfer =
  z.infer<typeof UserCreateNestedOneWithoutApplicationsInputObjectSchema>
export const UserCreateNestedOneWithoutApplicationsInputObjectSchema = Schema
