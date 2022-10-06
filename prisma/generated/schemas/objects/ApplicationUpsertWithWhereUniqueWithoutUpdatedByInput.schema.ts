import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithoutUpdatedByInputObjectSchema } from './ApplicationUpdateWithoutUpdatedByInput.schema'
import { ApplicationUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ApplicationUncheckedUpdateWithoutUpdatedByInput.schema'
import { ApplicationCreateWithoutUpdatedByInputObjectSchema } from './ApplicationCreateWithoutUpdatedByInput.schema'
import { ApplicationUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ApplicationUncheckedCreateWithoutUpdatedByInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ApplicationUpdateWithoutUpdatedByInputObjectSchema),
      z.lazy(() => ApplicationUncheckedUpdateWithoutUpdatedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutUpdatedByInputObjectSchema),
      z.lazy(() => ApplicationUncheckedCreateWithoutUpdatedByInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema
  >
export const ApplicationUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema
