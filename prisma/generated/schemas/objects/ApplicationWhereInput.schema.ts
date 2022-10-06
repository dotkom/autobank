import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema'
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { EnumstatusTypeFilterObjectSchema } from './EnumstatusTypeFilter.schema'
import { statusTypeSchema } from '../enums/statusType.schema'
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'
import { ReceiptRelationFilterObjectSchema } from './ReceiptRelationFilter.schema'
import { ReceiptWhereInputObjectSchema } from './ReceiptWhereInput.schema'
import { OnlinepottenRelationFilterObjectSchema } from './OnlinepottenRelationFilter.schema'
import { OnlinepottenWhereInputObjectSchema } from './OnlinepottenWhereInput.schema'
import { InvoiceRelationFilterObjectSchema } from './InvoiceRelationFilter.schema'
import { InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ApplicationWhereInputObjectSchema),
        z.lazy(() => ApplicationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ApplicationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ApplicationWhereInputObjectSchema),
        z.lazy(() => ApplicationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    fullname: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    approved_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    updatedBy: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    updatedById: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    last_updated: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumstatusTypeFilterObjectSchema),
        z.lazy(() => statusTypeSchema),
      ])
      .optional(),
    responsible_committee: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    comments: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    error: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    error_fields: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    Receipt: z
      .union([
        z.lazy(() => ReceiptRelationFilterObjectSchema),
        z.lazy(() => ReceiptWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Onlinepotten: z
      .union([
        z.lazy(() => OnlinepottenRelationFilterObjectSchema),
        z.lazy(() => OnlinepottenWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Invoice: z
      .union([
        z.lazy(() => InvoiceRelationFilterObjectSchema),
        z.lazy(() => InvoiceWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export type ApplicationWhereInputObjectSchemaInfer = z.infer<
  typeof ApplicationWhereInputObjectSchema
>
export const ApplicationWhereInputObjectSchema = Schema
