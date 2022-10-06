import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ApplicationOrderByWithRelationInputObjectSchema } from './ApplicationOrderByWithRelationInput.schema'
import { OnlinepottenOrderByWithRelationInputObjectSchema } from './OnlinepottenOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    account: z.lazy(() => SortOrderSchema).optional(),
    card: z.lazy(() => SortOrderSchema).optional(),
    paid_at: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    occasion: z.lazy(() => SortOrderSchema).optional(),
    appendix: z.lazy(() => SortOrderSchema).optional(),
    application: z
      .lazy(() => ApplicationOrderByWithRelationInputObjectSchema)
      .optional(),
    applicationId: z.lazy(() => SortOrderSchema).optional(),
    onlinepotten: z
      .lazy(() => OnlinepottenOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export type ReceiptOrderByWithRelationInputObjectSchemaInfer = z.infer<
  typeof ReceiptOrderByWithRelationInputObjectSchema
>
export const ReceiptOrderByWithRelationInputObjectSchema = Schema
