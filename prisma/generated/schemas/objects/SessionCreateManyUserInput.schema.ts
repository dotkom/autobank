import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    expires: z.date(),
  })
  .strict()

export type SessionCreateManyUserInputObjectSchemaInfer = z.infer<
  typeof SessionCreateManyUserInputObjectSchema
>
export const SessionCreateManyUserInputObjectSchema = Schema
