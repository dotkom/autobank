import { z } from 'zod'
import { UserUpdateWithoutApplicationsInputObjectSchema } from './UserUpdateWithoutApplicationsInput.schema'
import { UserUncheckedUpdateWithoutApplicationsInputObjectSchema } from './UserUncheckedUpdateWithoutApplicationsInput.schema'
import { UserCreateWithoutApplicationsInputObjectSchema } from './UserCreateWithoutApplicationsInput.schema'
import { UserUncheckedCreateWithoutApplicationsInputObjectSchema } from './UserUncheckedCreateWithoutApplicationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutApplicationsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutApplicationsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutApplicationsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutApplicationsInputObjectSchema),
    ]),
  })
  .strict()

export type UserUpsertWithoutApplicationsInputObjectSchemaInfer = z.infer<
  typeof UserUpsertWithoutApplicationsInputObjectSchema
>
export const UserUpsertWithoutApplicationsInputObjectSchema = Schema
