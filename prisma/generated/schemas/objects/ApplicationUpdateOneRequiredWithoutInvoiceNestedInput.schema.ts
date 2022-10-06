import { z } from 'zod'
import { ApplicationCreateWithoutInvoiceInputObjectSchema } from './ApplicationCreateWithoutInvoiceInput.schema'
import { ApplicationUncheckedCreateWithoutInvoiceInputObjectSchema } from './ApplicationUncheckedCreateWithoutInvoiceInput.schema'
import { ApplicationCreateOrConnectWithoutInvoiceInputObjectSchema } from './ApplicationCreateOrConnectWithoutInvoiceInput.schema'
import { ApplicationUpsertWithoutInvoiceInputObjectSchema } from './ApplicationUpsertWithoutInvoiceInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithoutInvoiceInputObjectSchema } from './ApplicationUpdateWithoutInvoiceInput.schema'
import { ApplicationUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ApplicationUncheckedUpdateWithoutInvoiceInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ApplicationCreateWithoutInvoiceInputObjectSchema),
          z.lazy(
            () => ApplicationUncheckedCreateWithoutInvoiceInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => ApplicationCreateOrConnectWithoutInvoiceInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => ApplicationUpsertWithoutInvoiceInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => ApplicationWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => ApplicationUpdateWithoutInvoiceInputObjectSchema),
          z.lazy(
            () => ApplicationUncheckedUpdateWithoutInvoiceInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type ApplicationUpdateOneRequiredWithoutInvoiceNestedInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUpdateOneRequiredWithoutInvoiceNestedInputObjectSchema
  >
export const ApplicationUpdateOneRequiredWithoutInvoiceNestedInputObjectSchema =
  Schema
