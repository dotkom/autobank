import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutUpdatedApplicationsInputObjectSchema } from './UserCreateWithoutUpdatedApplicationsInput.schema'
import { UserUncheckedCreateWithoutUpdatedApplicationsInputObjectSchema } from './UserUncheckedCreateWithoutUpdatedApplicationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutUpdatedApplicationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutUpdatedApplicationsInputObjectSchema
      ),
    ]),
  })
  .strict()

export type UserCreateOrConnectWithoutUpdatedApplicationsInputObjectSchemaInfer =
  z.infer<typeof UserCreateOrConnectWithoutUpdatedApplicationsInputObjectSchema>
export const UserCreateOrConnectWithoutUpdatedApplicationsInputObjectSchema =
  Schema
