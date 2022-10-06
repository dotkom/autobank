import { z } from 'zod'
import { roleSchema } from '../enums/role.schema'
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema'
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'
import { ApplicationCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ApplicationCreateNestedManyWithoutUpdatedByInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    role: z.lazy(() => roleSchema).optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    updatedApplications: z
      .lazy(() => ApplicationCreateNestedManyWithoutUpdatedByInputObjectSchema)
      .optional(),
  })
  .strict()

export type UserCreateWithoutApplicationsInputObjectSchemaInfer = z.infer<
  typeof UserCreateWithoutApplicationsInputObjectSchema
>
export const UserCreateWithoutApplicationsInputObjectSchema = Schema
