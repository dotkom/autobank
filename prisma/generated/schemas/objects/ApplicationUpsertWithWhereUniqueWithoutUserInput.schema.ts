import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithoutUserInputObjectSchema } from './ApplicationUpdateWithoutUserInput.schema'
import { ApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './ApplicationUncheckedUpdateWithoutUserInput.schema'
import { ApplicationCreateWithoutUserInputObjectSchema } from './ApplicationCreateWithoutUserInput.schema'
import { ApplicationUncheckedCreateWithoutUserInputObjectSchema } from './ApplicationUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ApplicationUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ApplicationUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ApplicationCreateWithoutUserInputObjectSchema),
      z.lazy(() => ApplicationUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchemaInfer =
  z.infer<typeof ApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema>
export const ApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema
