import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    receipt_id: z.string().optional(),
    applicationId: z.string().optional(),
  })
  .strict()

export type OnlinepottenWhereUniqueInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenWhereUniqueInputObjectSchema
>
export const OnlinepottenWhereUniqueInputObjectSchema = Schema
