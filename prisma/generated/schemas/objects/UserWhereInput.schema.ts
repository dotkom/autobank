import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { EnumroleFilterObjectSchema } from './EnumroleFilter.schema'
import { roleSchema } from '../enums/role.schema'
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema'
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema'
import { ApplicationListRelationFilterObjectSchema } from './ApplicationListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    role: z
      .union([
        z.lazy(() => EnumroleFilterObjectSchema),
        z.lazy(() => roleSchema),
      ])
      .optional(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    applications: z
      .lazy(() => ApplicationListRelationFilterObjectSchema)
      .optional(),
    updatedApplications: z
      .lazy(() => ApplicationListRelationFilterObjectSchema)
      .optional(),
  })
  .strict()

export type UserWhereInputObjectSchemaInfer = z.infer<
  typeof UserWhereInputObjectSchema
>
export const UserWhereInputObjectSchema = Schema
