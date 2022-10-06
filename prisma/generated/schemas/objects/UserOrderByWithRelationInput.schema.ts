import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema'
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'
import { ApplicationOrderByRelationAggregateInputObjectSchema } from './ApplicationOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    applications: z
      .lazy(() => ApplicationOrderByRelationAggregateInputObjectSchema)
      .optional(),
    updatedApplications: z
      .lazy(() => ApplicationOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export type UserOrderByWithRelationInputObjectSchemaInfer = z.infer<
  typeof UserOrderByWithRelationInputObjectSchema
>
export const UserOrderByWithRelationInputObjectSchema = Schema
