import { z } from 'zod'
import { roleSchema } from '../enums/role.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.lazy(() => roleSchema).optional(),
  })
  .strict()

export type EnumroleFieldUpdateOperationsInputObjectSchemaInfer = z.infer<
  typeof EnumroleFieldUpdateOperationsInputObjectSchema
>
export const EnumroleFieldUpdateOperationsInputObjectSchema = Schema
