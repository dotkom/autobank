import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
  })
  .strict()

export type OnlinepottenUpdateparticipantsInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenUpdateparticipantsInputObjectSchema
>
export const OnlinepottenUpdateparticipantsInputObjectSchema = Schema
