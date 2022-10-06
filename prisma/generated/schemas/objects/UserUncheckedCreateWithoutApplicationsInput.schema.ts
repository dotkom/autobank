import { z } from 'zod'
import { roleSchema } from '../enums/role.schema'
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema'
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'
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
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    updatedApplications: z
      .lazy(
        () =>
          ApplicationUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema
      )
      .optional(),
  })
  .strict()

export type UserUncheckedCreateWithoutApplicationsInputObjectSchemaInfer =
  z.infer<typeof UserUncheckedCreateWithoutApplicationsInputObjectSchema>
export const UserUncheckedCreateWithoutApplicationsInputObjectSchema = Schema
