import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'
import { ReceiptOrderByWithRelationInputObjectSchema } from './ReceiptOrderByWithRelationInput.schema'
import { OnlinepottenOrderByWithRelationInputObjectSchema } from './OnlinepottenOrderByWithRelationInput.schema'
import { InvoiceOrderByWithRelationInputObjectSchema } from './InvoiceOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    fullname: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    approved_at: z.lazy(() => SortOrderSchema).optional(),
    updatedBy: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    updatedById: z.lazy(() => SortOrderSchema).optional(),
    last_updated: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    responsible_committee: z.lazy(() => SortOrderSchema).optional(),
    comments: z.lazy(() => SortOrderSchema).optional(),
    error: z.lazy(() => SortOrderSchema).optional(),
    error_fields: z.lazy(() => SortOrderSchema).optional(),
    Receipt: z
      .lazy(() => ReceiptOrderByWithRelationInputObjectSchema)
      .optional(),
    Onlinepotten: z
      .lazy(() => OnlinepottenOrderByWithRelationInputObjectSchema)
      .optional(),
    Invoice: z
      .lazy(() => InvoiceOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export type ApplicationOrderByWithRelationInputObjectSchemaInfer = z.infer<
  typeof ApplicationOrderByWithRelationInputObjectSchema
>
export const ApplicationOrderByWithRelationInputObjectSchema = Schema
