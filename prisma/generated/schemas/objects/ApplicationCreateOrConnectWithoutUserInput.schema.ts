import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationCreateWithoutUserInputObjectSchema } from './ApplicationCreateWithoutUserInput.schema'
import { ApplicationUncheckedCreateWithoutUserInputObjectSchema } from './ApplicationUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutUserInputObjectSchema),
      z.lazy(() => ApplicationUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationCreateOrConnectWithoutUserInputObjectSchemaInfer =
  z.infer<typeof ApplicationCreateOrConnectWithoutUserInputObjectSchema>
export const ApplicationCreateOrConnectWithoutUserInputObjectSchema = Schema
