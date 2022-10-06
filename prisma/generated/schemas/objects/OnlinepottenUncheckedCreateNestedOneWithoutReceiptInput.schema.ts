import { z } from 'zod'
import { OnlinepottenCreateWithoutReceiptInputObjectSchema } from './OnlinepottenCreateWithoutReceiptInput.schema'
import { OnlinepottenUncheckedCreateWithoutReceiptInputObjectSchema } from './OnlinepottenUncheckedCreateWithoutReceiptInput.schema'
import { OnlinepottenCreateOrConnectWithoutReceiptInputObjectSchema } from './OnlinepottenCreateOrConnectWithoutReceiptInput.schema'
import { OnlinepottenWhereUniqueInputObjectSchema } from './OnlinepottenWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z.union([
  z
    .object({
      create: z
        .union([
          z.lazy(() => OnlinepottenCreateWithoutReceiptInputObjectSchema),
          z.lazy(
            () => OnlinepottenUncheckedCreateWithoutReceiptInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict(),
  z
    .object({
      connectOrCreate: z
        .lazy(() => OnlinepottenCreateOrConnectWithoutReceiptInputObjectSchema)
        .optional(),
    })
    .strict(),
  z
    .object({
      connect: z
        .lazy(() => OnlinepottenWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict(),
])

export type OnlinepottenUncheckedCreateNestedOneWithoutReceiptInputObjectSchemaInfer =
  z.infer<
    typeof OnlinepottenUncheckedCreateNestedOneWithoutReceiptInputObjectSchema
  >
export const OnlinepottenUncheckedCreateNestedOneWithoutReceiptInputObjectSchema =
  Schema
