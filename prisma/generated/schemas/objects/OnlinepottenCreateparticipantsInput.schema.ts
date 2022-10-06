import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.string().array(),
  })
  .strict()

export type OnlinepottenCreateparticipantsInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenCreateparticipantsInputObjectSchema
>
export const OnlinepottenCreateparticipantsInputObjectSchema = Schema
