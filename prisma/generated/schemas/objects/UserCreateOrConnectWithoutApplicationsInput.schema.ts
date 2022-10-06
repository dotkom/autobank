import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutApplicationsInputObjectSchema } from './UserCreateWithoutApplicationsInput.schema'
import { UserUncheckedCreateWithoutApplicationsInputObjectSchema } from './UserUncheckedCreateWithoutApplicationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutApplicationsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutApplicationsInputObjectSchema),
    ]),
  })
  .strict()

export type UserCreateOrConnectWithoutApplicationsInputObjectSchemaInfer =
  z.infer<typeof UserCreateOrConnectWithoutApplicationsInputObjectSchema>
export const UserCreateOrConnectWithoutApplicationsInputObjectSchema = Schema
