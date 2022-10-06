import { z } from 'zod'
import { OnlinepottenWhereUniqueInputObjectSchema } from './OnlinepottenWhereUniqueInput.schema'
import { OnlinepottenCreateWithoutReceiptInputObjectSchema } from './OnlinepottenCreateWithoutReceiptInput.schema'
import { OnlinepottenUncheckedCreateWithoutReceiptInputObjectSchema } from './OnlinepottenUncheckedCreateWithoutReceiptInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => OnlinepottenWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OnlinepottenCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => OnlinepottenUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict()

export type OnlinepottenCreateOrConnectWithoutReceiptInputObjectSchemaInfer =
  z.infer<typeof OnlinepottenCreateOrConnectWithoutReceiptInputObjectSchema>
export const OnlinepottenCreateOrConnectWithoutReceiptInputObjectSchema = Schema
