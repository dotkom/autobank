import { z } from 'zod'
import { VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema } from './VerificationTokenIdentifierTokenCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    token: z.string().optional(),
    identifier_token: z
      .lazy(
        () => VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema
      )
      .optional(),
  })
  .strict()

export type VerificationTokenWhereUniqueInputObjectSchemaInfer = z.infer<
  typeof VerificationTokenWhereUniqueInputObjectSchema
>
export const VerificationTokenWhereUniqueInputObjectSchema = Schema
