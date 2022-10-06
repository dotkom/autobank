import { z } from 'zod'
import { AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    data: z.lazy(() => AccountCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export type AccountCreateManyUserInputEnvelopeObjectSchemaInfer = z.infer<
  typeof AccountCreateManyUserInputEnvelopeObjectSchema
>
export const AccountCreateManyUserInputEnvelopeObjectSchema = Schema
