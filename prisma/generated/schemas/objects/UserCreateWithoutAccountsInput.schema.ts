import { z } from 'zod'
import { roleSchema } from '../enums/role.schema'
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'
import { ApplicationCreateNestedManyWithoutUserInputObjectSchema } from './ApplicationCreateNestedManyWithoutUserInput.schema'
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
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    applications: z
      .lazy(() => ApplicationCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    updatedApplications: z
      .lazy(() => ApplicationCreateNestedManyWithoutUpdatedByInputObjectSchema)
      .optional(),
  })
  .strict()

export type UserCreateWithoutAccountsInputObjectSchemaInfer = z.infer<
  typeof UserCreateWithoutAccountsInputObjectSchema
>
export const UserCreateWithoutAccountsInputObjectSchema = Schema