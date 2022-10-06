import { z } from 'zod'
import { statusTypeSchema } from '../enums/statusType.schema'
import { ApplicationCreateerror_fieldsInputObjectSchema } from './ApplicationCreateerror_fieldsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    userId: z.string().optional().nullable(),
    fullname: z.string(),
    email: z.string(),
    created_at: z.date().optional(),
    approved_at: z.date().optional().nullable(),
    last_updated: z.date().optional(),
    status: z.lazy(() => statusTypeSchema).optional(),
    responsible_committee: z.string().optional(),
    comments: z.string().optional().nullable(),
    error: z.string().optional().nullable(),
    error_fields: z
      .union([
        z.lazy(() => ApplicationCreateerror_fieldsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict()

export type ApplicationCreateManyUpdatedByInputObjectSchemaInfer = z.infer<
  typeof ApplicationCreateManyUpdatedByInputObjectSchema
>
export const ApplicationCreateManyUpdatedByInputObjectSchema = Schema
