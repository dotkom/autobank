import { z } from 'zod'
import { InvoiceWhereUniqueInputObjectSchema } from './InvoiceWhereUniqueInput.schema'
import { InvoiceCreateWithoutApplicationInputObjectSchema } from './InvoiceCreateWithoutApplicationInput.schema'
import { InvoiceUncheckedCreateWithoutApplicationInputObjectSchema } from './InvoiceUncheckedCreateWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => InvoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => InvoiceCreateWithoutApplicationInputObjectSchema),
      z.lazy(() => InvoiceUncheckedCreateWithoutApplicationInputObjectSchema),
    ]),
  })
  .strict()

export type InvoiceCreateOrConnectWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof InvoiceCreateOrConnectWithoutApplicationInputObjectSchema>
export const InvoiceCreateOrConnectWithoutApplicationInputObjectSchema = Schema
