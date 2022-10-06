import { z } from 'zod'
import { ApplicationCreateManyUserInputObjectSchema } from './ApplicationCreateManyUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    data: z.lazy(() => ApplicationCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export type ApplicationCreateManyUserInputEnvelopeObjectSchemaInfer = z.infer<
  typeof ApplicationCreateManyUserInputEnvelopeObjectSchema
>
export const ApplicationCreateManyUserInputEnvelopeObjectSchema = Schema
