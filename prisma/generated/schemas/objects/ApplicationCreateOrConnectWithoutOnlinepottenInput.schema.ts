import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationCreateWithoutOnlinepottenInputObjectSchema } from './ApplicationCreateWithoutOnlinepottenInput.schema'
import { ApplicationUncheckedCreateWithoutOnlinepottenInputObjectSchema } from './ApplicationUncheckedCreateWithoutOnlinepottenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutOnlinepottenInputObjectSchema),
      z.lazy(
        () => ApplicationUncheckedCreateWithoutOnlinepottenInputObjectSchema
      ),
    ]),
  })
  .strict()

export type ApplicationCreateOrConnectWithoutOnlinepottenInputObjectSchemaInfer =
  z.infer<typeof ApplicationCreateOrConnectWithoutOnlinepottenInputObjectSchema>
export const ApplicationCreateOrConnectWithoutOnlinepottenInputObjectSchema =
  Schema
