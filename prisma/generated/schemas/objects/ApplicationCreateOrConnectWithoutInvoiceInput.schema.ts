import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationCreateWithoutInvoiceInputObjectSchema } from './ApplicationCreateWithoutInvoiceInput.schema'
import { ApplicationUncheckedCreateWithoutInvoiceInputObjectSchema } from './ApplicationUncheckedCreateWithoutInvoiceInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutInvoiceInputObjectSchema),
      z.lazy(() => ApplicationUncheckedCreateWithoutInvoiceInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationCreateOrConnectWithoutInvoiceInputObjectSchemaInfer =
  z.infer<typeof ApplicationCreateOrConnectWithoutInvoiceInputObjectSchema>
export const ApplicationCreateOrConnectWithoutInvoiceInputObjectSchema = Schema
