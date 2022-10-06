import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { EnumreceiptTypeWithAggregatesFilterObjectSchema } from './EnumreceiptTypeWithAggregatesFilter.schema'
import { receiptTypeSchema } from '../enums/receiptType.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumreceiptTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => receiptTypeSchema),
      ])
      .optional(),
    account: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    card: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    paid_at: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.date(),
      ])
      .optional()
      .nullable(),
    amount: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    occasion: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    appendix: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    applicationId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export type ReceiptScalarWhereWithAggregatesInputObjectSchemaInfer = z.infer<
  typeof ReceiptScalarWhereWithAggregatesInputObjectSchema
>
export const ReceiptScalarWhereWithAggregatesInputObjectSchema = Schema
