import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
  })
  .strict()

export type ApplicationUpdateerror_fieldsInputObjectSchemaInfer = z.infer<
  typeof ApplicationUpdateerror_fieldsInputObjectSchema
>
export const ApplicationUpdateerror_fieldsInputObjectSchema = Schema
