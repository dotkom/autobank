import { z } from 'zod'
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    expires: z.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict()

export type SessionCreateInputObjectSchemaInfer = z.infer<
  typeof SessionCreateInputObjectSchema
>
export const SessionCreateInputObjectSchema = Schema
