import { z } from 'zod'
import { ApplicationCreateManyUpdatedByInputObjectSchema } from './ApplicationCreateManyUpdatedByInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    data: z.lazy(() => ApplicationCreateManyUpdatedByInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export type ApplicationCreateManyUpdatedByInputEnvelopeObjectSchemaInfer =
  z.infer<typeof ApplicationCreateManyUpdatedByInputEnvelopeObjectSchema>
export const ApplicationCreateManyUpdatedByInputEnvelopeObjectSchema = Schema
