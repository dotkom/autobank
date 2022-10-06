import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    email: z.string().optional(),
  })
  .strict()

export type UserWhereUniqueInputObjectSchemaInfer = z.infer<
  typeof UserWhereUniqueInputObjectSchema
>
export const UserWhereUniqueInputObjectSchema = Schema
