import { z } from 'zod'
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema'
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema'
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema'
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAccountsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema),
    ]),
  })
  .strict()

export type UserUpsertWithoutAccountsInputObjectSchemaInfer = z.infer<
  typeof UserUpsertWithoutAccountsInputObjectSchema
>
export const UserUpsertWithoutAccountsInputObjectSchema = Schema
