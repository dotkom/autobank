import { z } from 'zod'
import { receiptTypeSchema } from '../enums/receiptType.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    set: z.lazy(() => receiptTypeSchema).optional(),
  })
  .strict()

export type EnumreceiptTypeFieldUpdateOperationsInputObjectSchemaInfer =
  z.infer<typeof EnumreceiptTypeFieldUpdateOperationsInputObjectSchema>
export const EnumreceiptTypeFieldUpdateOperationsInputObjectSchema = Schema
