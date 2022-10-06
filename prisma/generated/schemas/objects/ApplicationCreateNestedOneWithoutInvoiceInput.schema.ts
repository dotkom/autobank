import { z } from 'zod'
import { ApplicationCreateWithoutInvoiceInputObjectSchema } from './ApplicationCreateWithoutInvoiceInput.schema'
import { ApplicationUncheckedCreateWithoutInvoiceInputObjectSchema } from './ApplicationUncheckedCreateWithoutInvoiceInput.schema'
import { ApplicationCreateOrConnectWithoutInvoiceInputObjectSchema } from './ApplicationCreateOrConnectWithoutInvoiceInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'

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
      connect: z.lazy(() => ApplicationWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type ApplicationCreateNestedOneWithoutInvoiceInputObjectSchemaInfer =
  z.infer<typeof ApplicationCreateNestedOneWithoutInvoiceInputObjectSchema>
export const ApplicationCreateNestedOneWithoutInvoiceInputObjectSchema = Schema
