import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    expires: z.date(),
  })
  .strict()

export type SessionUncheckedCreateWithoutUserInputObjectSchemaInfer = z.infer<
  typeof SessionUncheckedCreateWithoutUserInputObjectSchema
>
export const SessionUncheckedCreateWithoutUserInputObjectSchema = Schema
