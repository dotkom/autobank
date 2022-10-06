import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { EnumreceiptTypeFilterObjectSchema } from './EnumreceiptTypeFilter.schema'
import { receiptTypeSchema } from '../enums/receiptType.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'
import { ApplicationRelationFilterObjectSchema } from './ApplicationRelationFilter.schema'
import { ApplicationWhereInputObjectSchema } from './ApplicationWhereInput.schema'
import { OnlinepottenRelationFilterObjectSchema } from './OnlinepottenRelationFilter.schema'
import { OnlinepottenWhereInputObjectSchema } from './OnlinepottenWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReceiptWhereInputObjectSchema),
        z.lazy(() => ReceiptWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReceiptWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReceiptWhereInputObjectSchema),
        z.lazy(() => ReceiptWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumreceiptTypeFilterObjectSchema),
        z.lazy(() => receiptTypeSchema),
      ])
      .optional(),
    account: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    card: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    paid_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    amount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    occasion: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    appendix: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    application: z
      .union([
        z.lazy(() => ApplicationRelationFilterObjectSchema),
        z.lazy(() => ApplicationWhereInputObjectSchema),
      ])
      .optional(),
    applicationId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    onlinepotten: z
      .union([
        z.lazy(() => OnlinepottenRelationFilterObjectSchema),
        z.lazy(() => OnlinepottenWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export type ReceiptWhereInputObjectSchemaInfer = z.infer<
  typeof ReceiptWhereInputObjectSchema
>
export const ReceiptWhereInputObjectSchema = Schema
