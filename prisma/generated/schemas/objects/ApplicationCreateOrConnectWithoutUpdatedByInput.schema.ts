import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationCreateWithoutUpdatedByInputObjectSchema } from './ApplicationCreateWithoutUpdatedByInput.schema'
import { ApplicationUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ApplicationUncheckedCreateWithoutUpdatedByInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutUpdatedByInputObjectSchema),
      z.lazy(() => ApplicationUncheckedCreateWithoutUpdatedByInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationCreateOrConnectWithoutUpdatedByInputObjectSchemaInfer =
  z.infer<typeof ApplicationCreateOrConnectWithoutUpdatedByInputObjectSchema>
export const ApplicationCreateOrConnectWithoutUpdatedByInputObjectSchema =
  Schema
