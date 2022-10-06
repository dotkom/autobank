import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccountsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema),
    ]),
  })
  .strict()

export type UserCreateOrConnectWithoutAccountsInputObjectSchemaInfer = z.infer<
  typeof UserCreateOrConnectWithoutAccountsInputObjectSchema
>
export const UserCreateOrConnectWithoutAccountsInputObjectSchema = Schema
