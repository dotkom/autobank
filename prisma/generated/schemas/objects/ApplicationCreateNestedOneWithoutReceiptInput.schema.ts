import { z } from 'zod'
import { ApplicationCreateWithoutReceiptInputObjectSchema } from './ApplicationCreateWithoutReceiptInput.schema'
import { ApplicationUncheckedCreateWithoutReceiptInputObjectSchema } from './ApplicationUncheckedCreateWithoutReceiptInput.schema'
import { ApplicationCreateOrConnectWithoutReceiptInputObjectSchema } from './ApplicationCreateOrConnectWithoutReceiptInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => ApplicationCreateWithoutReceiptInputObjectSchema),
          z.lazy(
            () => ApplicationUncheckedCreateWithoutReceiptInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => ApplicationCreateOrConnectWithoutReceiptInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z.lazy(() => ApplicationWhereUniqueInputObjectSchema).optional(),
    })
    .strict(),
])

export type ApplicationCreateNestedOneWithoutReceiptInputObjectSchemaInfer =
  z.infer<typeof ApplicationCreateNestedOneWithoutReceiptInputObjectSchema>
export const ApplicationCreateNestedOneWithoutReceiptInputObjectSchema = Schema
