import { z } from 'zod'
import { SessionWhereInputObjectSchema } from './SessionWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    every: z.lazy(() => SessionWhereInputObjectSchema).optional(),
    some: z.lazy(() => SessionWhereInputObjectSchema).optional(),
    none: z.lazy(() => SessionWhereInputObjectSchema).optional(),
  })
  .strict()

export type SessionListRelationFilterObjectSchemaInfer = z.infer<
  typeof SessionListRelationFilterObjectSchema
>
export const SessionListRelationFilterObjectSchema = Schema
