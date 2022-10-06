import { z } from 'zod'
import { ApplicationWhereInputObjectSchema } from './ApplicationWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    every: z.lazy(() => ApplicationWhereInputObjectSchema).optional(),
    some: z.lazy(() => ApplicationWhereInputObjectSchema).optional(),
    none: z.lazy(() => ApplicationWhereInputObjectSchema).optional(),
  })
  .strict()

export type ApplicationListRelationFilterObjectSchemaInfer = z.infer<
  typeof ApplicationListRelationFilterObjectSchema
>
export const ApplicationListRelationFilterObjectSchema = Schema
