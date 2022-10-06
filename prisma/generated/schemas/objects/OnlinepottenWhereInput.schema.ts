import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { ReceiptRelationFilterObjectSchema } from './ReceiptRelationFilter.schema'
import { ReceiptWhereInputObjectSchema } from './ReceiptWhereInput.schema'
import { ApplicationRelationFilterObjectSchema } from './ApplicationRelationFilter.schema'
import { ApplicationWhereInputObjectSchema } from './ApplicationWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    AND: z
      .union([
        z.lazy(() => OnlinepottenWhereInputObjectSchema),
        z.lazy(() => OnlinepottenWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OnlinepottenWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OnlinepottenWhereInputObjectSchema),
        z.lazy(() => OnlinepottenWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    occasion: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    planned_date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    hours: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    participants: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    payment_method: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    receipt_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    receipt: z
      .union([
        z.lazy(() => ReceiptRelationFilterObjectSchema),
        z.lazy(() => ReceiptWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    application: z
      .union([
        z.lazy(() => ApplicationRelationFilterObjectSchema),
        z.lazy(() => ApplicationWhereInputObjectSchema),
      ])
      .optional(),
    applicationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export type OnlinepottenWhereInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenWhereInputObjectSchema
>
export const OnlinepottenWhereInputObjectSchema = Schema
