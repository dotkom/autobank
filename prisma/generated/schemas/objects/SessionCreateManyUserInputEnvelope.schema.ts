import { z } from 'zod'
import { SessionCreateManyUserInputObjectSchema } from './SessionCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    data: z.lazy(() => SessionCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export type SessionCreateManyUserInputEnvelopeObjectSchemaInfer = z.infer<
  typeof SessionCreateManyUserInputEnvelopeObjectSchema
>
export const SessionCreateManyUserInputEnvelopeObjectSchema = Schema
