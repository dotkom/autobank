import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    identifier: z.string(),
    token: z.string(),
  })
  .strict()

export type VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchemaInfer =
  z.infer<
    typeof VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema
  >
export const VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema =
  Schema
