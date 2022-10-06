import { z } from 'zod'
import { OnlinepottenWhereInputObjectSchema } from './OnlinepottenWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    is: z
      .lazy(() => OnlinepottenWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => OnlinepottenWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export type OnlinepottenRelationFilterObjectSchemaInfer = z.infer<
  typeof OnlinepottenRelationFilterObjectSchema
>
export const OnlinepottenRelationFilterObjectSchema = Schema
