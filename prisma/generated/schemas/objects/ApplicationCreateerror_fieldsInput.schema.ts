import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.string().array(),
  })
  .strict()

export type ApplicationCreateerror_fieldsInputObjectSchemaInfer = z.infer<
  typeof ApplicationCreateerror_fieldsInputObjectSchema
>
export const ApplicationCreateerror_fieldsInputObjectSchema = Schema
