import { z } from 'zod'
import { OnlinepottenUpdateWithoutApplicationInputObjectSchema } from './OnlinepottenUpdateWithoutApplicationInput.schema'
import { OnlinepottenUncheckedUpdateWithoutApplicationInputObjectSchema } from './OnlinepottenUncheckedUpdateWithoutApplicationInput.schema'
import { OnlinepottenCreateWithoutApplicationInputObjectSchema } from './OnlinepottenCreateWithoutApplicationInput.schema'
import { OnlinepottenUncheckedCreateWithoutApplicationInputObjectSchema } from './OnlinepottenUncheckedCreateWithoutApplicationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => OnlinepottenUpdateWithoutApplicationInputObjectSchema),
      z.lazy(
        () => OnlinepottenUncheckedUpdateWithoutApplicationInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => OnlinepottenCreateWithoutApplicationInputObjectSchema),
      z.lazy(
        () => OnlinepottenUncheckedCreateWithoutApplicationInputObjectSchema
      ),
    ]),
  })
  .strict()

export type OnlinepottenUpsertWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof OnlinepottenUpsertWithoutApplicationInputObjectSchema>
export const OnlinepottenUpsertWithoutApplicationInputObjectSchema = Schema
