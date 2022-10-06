import { z } from 'zod'
import { OnlinepottenWhereUniqueInputObjectSchema } from './OnlinepottenWhereUniqueInput.schema'
import { OnlinepottenCreateWithoutApplicationInputObjectSchema } from './OnlinepottenCreateWithoutApplicationInput.schema'
import { OnlinepottenUncheckedCreateWithoutApplicationInputObjectSchema } from './OnlinepottenUncheckedCreateWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => OnlinepottenWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OnlinepottenCreateWithoutApplicationInputObjectSchema),
      z.lazy(
        () => OnlinepottenUncheckedCreateWithoutApplicationInputObjectSchema
      ),
    ]),
  })
  .strict()

export type OnlinepottenCreateOrConnectWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof OnlinepottenCreateOrConnectWithoutApplicationInputObjectSchema>
export const OnlinepottenCreateOrConnectWithoutApplicationInputObjectSchema =
  Schema
