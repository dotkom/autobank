import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    userId: z.string(),
    expires: z.date(),
  })
  .strict()

export type SessionUncheckedCreateInputObjectSchemaInfer = z.infer<
  typeof SessionUncheckedCreateInputObjectSchema
>
export const SessionUncheckedCreateInputObjectSchema = Schema
