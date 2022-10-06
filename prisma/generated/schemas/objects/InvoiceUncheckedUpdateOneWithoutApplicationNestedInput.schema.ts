import { z } from 'zod'
import { InvoiceCreateWithoutApplicationInputObjectSchema } from './InvoiceCreateWithoutApplicationInput.schema'
import { InvoiceUncheckedCreateWithoutApplicationInputObjectSchema } from './InvoiceUncheckedCreateWithoutApplicationInput.schema'
import { InvoiceCreateOrConnectWithoutApplicationInputObjectSchema } from './InvoiceCreateOrConnectWithoutApplicationInput.schema'
import { InvoiceUpsertWithoutApplicationInputObjectSchema } from './InvoiceUpsertWithoutApplicationInput.schema'
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'
import { InvoiceUpdateWithoutApplicationInputObjectSchema } from './InvoiceUpdateWithoutApplicationInput.schema'
import { InvoiceUncheckedUpdateWithoutApplicationInputObjectSchema } from './InvoiceUncheckedUpdateWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutApplicationInputObjectSchema),
          z.lazy(
            () => InvoiceUncheckedCreateWithoutApplicationInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => InvoiceCreateOrConnectWithoutApplicationInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      upsert: z
        .lazy(() => InvoiceUpsertWithoutApplicationInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      disconnect: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      delete: z.boolean().optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
  z
    .object({
      update: z
        .union([
          z.lazy(() => InvoiceUpdateWithoutApplicationInputObjectSchema),
          z.lazy(
            () => InvoiceUncheckedUpdateWithoutApplicationInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type InvoiceUncheckedUpdateOneWithoutApplicationNestedInputObjectSchemaInfer =
  z.infer<
    typeof InvoiceUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema
  >
export const InvoiceUncheckedUpdateOneWithoutApplicationNestedInputObjectSchema =
  Schema
