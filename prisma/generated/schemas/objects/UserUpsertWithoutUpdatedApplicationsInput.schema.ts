import { z } from 'zod'
import { UserUpdateWithoutUpdatedApplicationsInputObjectSchema } from './UserUpdateWithoutUpdatedApplicationsInput.schema'
import { UserUncheckedUpdateWithoutUpdatedApplicationsInputObjectSchema } from './UserUncheckedUpdateWithoutUpdatedApplicationsInput.schema'
import { UserCreateWithoutUpdatedApplicationsInputObjectSchema } from './UserCreateWithoutUpdatedApplicationsInput.schema'
import { UserUncheckedCreateWithoutUpdatedApplicationsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedApplicationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutUpdatedApplicationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutUpdatedApplicationsInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutUpdatedApplicationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutUpdatedApplicationsInputObjectSchema
      ),
    ]),
  })
  .strict()

export type UserUpsertWithoutUpdatedApplicationsInputObjectSchemaInfer =
  z.infer<typeof UserUpsertWithoutUpdatedApplicationsInputObjectSchema>
export const UserUpsertWithoutUpdatedApplicationsInputObjectSchema = Schema
