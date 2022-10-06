import { z } from 'zod'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    is: z.lazy(() => UserWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => UserWhereInputObjectSchema).optional(),
  })
  .strict()

export type UserRelationFilterObjectSchemaInfer = z.infer<
  typeof UserRelationFilterObjectSchema
>
export const UserRelationFilterObjectSchema = Schema
