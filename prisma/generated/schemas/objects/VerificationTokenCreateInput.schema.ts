import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    identifier: z.string(),
    token: z.string(),
    expires: z.date(),
  })
  .strict()

export type VerificationTokenCreateInputObjectSchemaInfer = z.infer<
  typeof VerificationTokenCreateInputObjectSchema
>
export const VerificationTokenCreateInputObjectSchema = Schema
