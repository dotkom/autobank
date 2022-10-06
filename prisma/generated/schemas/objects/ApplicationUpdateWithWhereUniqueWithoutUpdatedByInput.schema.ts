import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithoutUpdatedByInputObjectSchema } from './ApplicationUpdateWithoutUpdatedByInput.schema'
import { ApplicationUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ApplicationUncheckedUpdateWithoutUpdatedByInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ApplicationUpdateWithoutUpdatedByInputObjectSchema),
      z.lazy(() => ApplicationUncheckedUpdateWithoutUpdatedByInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema
  >
export const ApplicationUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema
