import { z } from 'zod'
import { statusTypeSchema } from '../enums/statusType.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.lazy(() => statusTypeSchema).optional(),
  })
  .strict()

export type EnumstatusTypeFieldUpdateOperationsInputObjectSchemaInfer = z.infer<
  typeof EnumstatusTypeFieldUpdateOperationsInputObjectSchema
>
export const EnumstatusTypeFieldUpdateOperationsInputObjectSchema = Schema
