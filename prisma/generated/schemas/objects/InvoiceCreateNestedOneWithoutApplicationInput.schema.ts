import { z } from 'zod'
import { InvoiceCreateWithoutApplicationInputObjectSchema } from './InvoiceCreateWithoutApplicationInput.schema'
import { InvoiceUncheckedCreateWithoutApplicationInputObjectSchema } from './InvoiceUncheckedCreateWithoutApplicationInput.schema'
import { InvoiceCreateOrConnectWithoutApplicationInputObjectSchema } from './InvoiceCreateOrConnectWithoutApplicationInput.schema'
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'

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
      connect: z.lazy(() => InvoiceWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type InvoiceCreateNestedOneWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof InvoiceCreateNestedOneWithoutApplicationInputObjectSchema>
export const InvoiceCreateNestedOneWithoutApplicationInputObjectSchema = Schema
