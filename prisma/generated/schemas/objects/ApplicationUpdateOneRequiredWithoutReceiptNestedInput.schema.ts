import { z } from 'zod'
import { ApplicationCreateWithoutReceiptInputObjectSchema } from './ApplicationCreateWithoutReceiptInput.schema'
import { ApplicationUncheckedCreateWithoutReceiptInputObjectSchema } from './ApplicationUncheckedCreateWithoutReceiptInput.schema'
import { ApplicationCreateOrConnectWithoutReceiptInputObjectSchema } from './ApplicationCreateOrConnectWithoutReceiptInput.schema'
import { ApplicationUpsertWithoutReceiptInputObjectSchema } from './ApplicationUpsertWithoutReceiptInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithoutReceiptInputObjectSchema } from './ApplicationUpdateWithoutReceiptInput.schema'
import { ApplicationUncheckedUpdateWithoutReceiptInputObjectSchema } from './ApplicationUncheckedUpdateWithoutReceiptInput.schema'

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
      upsert: z
        .lazy(() => ApplicationUpsertWithoutReceiptInputObjectSchema)
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
          z.lazy(() => ApplicationUpdateWithoutReceiptInputObjectSchema),
          z.lazy(
            () => ApplicationUncheckedUpdateWithoutReceiptInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
])

export type ApplicationUpdateOneRequiredWithoutReceiptNestedInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUpdateOneRequiredWithoutReceiptNestedInputObjectSchema
  >
export const ApplicationUpdateOneRequiredWithoutReceiptNestedInputObjectSchema =
  Schema
