import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { EnumstatusTypeFilterObjectSchema } from './EnumstatusTypeFilter.schema'
import { statusTypeSchema } from '../enums/statusType.schema'
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ApplicationScalarWhereInputObjectSchema),
        z.lazy(() => ApplicationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ApplicationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ApplicationScalarWhereInputObjectSchema),
        z.lazy(() => ApplicationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
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
  })
  .strict()

export type ApplicationScalarWhereInputObjectSchemaInfer = z.infer<
  typeof ApplicationScalarWhereInputObjectSchema
>
export const ApplicationScalarWhereInputObjectSchema = Schema
