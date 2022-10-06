import { z } from 'zod'
import { ApplicationUpdateWithoutOnlinepottenInputObjectSchema } from './ApplicationUpdateWithoutOnlinepottenInput.schema'
import { ApplicationUncheckedUpdateWithoutOnlinepottenInputObjectSchema } from './ApplicationUncheckedUpdateWithoutOnlinepottenInput.schema'
import { ApplicationCreateWithoutOnlinepottenInputObjectSchema } from './ApplicationCreateWithoutOnlinepottenInput.schema'
import { ApplicationUncheckedCreateWithoutOnlinepottenInputObjectSchema } from './ApplicationUncheckedCreateWithoutOnlinepottenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    update: z.union([
      z.lazy(() => ApplicationUpdateWithoutOnlinepottenInputObjectSchema),
      z.lazy(
        () => ApplicationUncheckedUpdateWithoutOnlinepottenInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutOnlinepottenInputObjectSchema),
      z.lazy(
        () => ApplicationUncheckedCreateWithoutOnlinepottenInputObjectSchema
      ),
    ]),
  })
  .strict()

export type ApplicationUpsertWithoutOnlinepottenInputObjectSchemaInfer =
  z.infer<typeof ApplicationUpsertWithoutOnlinepottenInputObjectSchema>
export const ApplicationUpsertWithoutOnlinepottenInputObjectSchema = Schema
