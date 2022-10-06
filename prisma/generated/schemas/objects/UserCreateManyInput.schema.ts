import { z } from 'zod'
import { roleSchema } from '../enums/role.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    role: z.lazy(() => roleSchema).optional(),
  })
  .strict()

export type UserCreateManyInputObjectSchemaInfer = z.infer<
  typeof UserCreateManyInputObjectSchema
>
export const UserCreateManyInputObjectSchema = Schema
