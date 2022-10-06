import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema'
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict()

export type UserCreateOrConnectWithoutSessionsInputObjectSchemaInfer = z.infer<
  typeof UserCreateOrConnectWithoutSessionsInputObjectSchema
>
export const UserCreateOrConnectWithoutSessionsInputObjectSchema = Schema
