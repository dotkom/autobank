import { z } from 'zod'
import { ApplicationWhereInputObjectSchema } from './ApplicationWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    is: z.lazy(() => ApplicationWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ApplicationWhereInputObjectSchema).optional(),
  })
  .strict()

export type ApplicationRelationFilterObjectSchemaInfer = z.infer<
  typeof ApplicationRelationFilterObjectSchema
>
export const ApplicationRelationFilterObjectSchema = Schema
