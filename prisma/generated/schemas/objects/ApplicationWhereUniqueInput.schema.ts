import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
  })
  .strict()

export type ApplicationWhereUniqueInputObjectSchemaInfer = z.infer<
  typeof ApplicationWhereUniqueInputObjectSchema
>
export const ApplicationWhereUniqueInputObjectSchema = Schema
