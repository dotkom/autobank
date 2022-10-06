import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    identifier: z.string(),
    token: z.string(),
    expires: z.date(),
  })
  .strict()

export type VerificationTokenCreateManyInputObjectSchemaInfer = z.infer<
  typeof VerificationTokenCreateManyInputObjectSchema
>
export const VerificationTokenCreateManyInputObjectSchema = Schema
