import { z } from 'zod'
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema'
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'
import { UserCreateOrConnectWithoutSessionsInputObjectSchema } from './UserCreateOrConnectWithoutSessionsInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type UserCreateNestedOneWithoutSessionsInputObjectSchemaInfer = z.infer<
  typeof UserCreateNestedOneWithoutSessionsInputObjectSchema
>
export const UserCreateNestedOneWithoutSessionsInputObjectSchema = Schema
