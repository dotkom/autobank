import { z } from 'zod'
import { roleSchema } from '../enums/role.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'
import { ApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ApplicationUncheckedCreateNestedManyWithoutUserInput.schema'
import { ApplicationUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ApplicationUncheckedCreateNestedManyWithoutUpdatedByInput.schema'

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
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    applications: z
      .lazy(
        () => ApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema
      )
      .optional(),
    updatedApplications: z
      .lazy(
        () =>
          ApplicationUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema
      )
      .optional(),
  })
  .strict()

export type UserUncheckedCreateWithoutAccountsInputObjectSchemaInfer = z.infer<
  typeof UserUncheckedCreateWithoutAccountsInputObjectSchema
>
export const UserUncheckedCreateWithoutAccountsInputObjectSchema = Schema
