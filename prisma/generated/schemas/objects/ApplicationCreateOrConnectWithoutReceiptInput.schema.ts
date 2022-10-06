import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationCreateWithoutReceiptInputObjectSchema } from './ApplicationCreateWithoutReceiptInput.schema'
import { ApplicationUncheckedCreateWithoutReceiptInputObjectSchema } from './ApplicationUncheckedCreateWithoutReceiptInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => ApplicationUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationCreateOrConnectWithoutReceiptInputObjectSchemaInfer =
  z.infer<typeof ApplicationCreateOrConnectWithoutReceiptInputObjectSchema>
export const ApplicationCreateOrConnectWithoutReceiptInputObjectSchema = Schema
