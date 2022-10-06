import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './ApplicationWhereUniqueInput.schema'
import { ApplicationUpdateWithoutUserInputObjectSchema } from './ApplicationUpdateWithoutUserInput.schema'
import { ApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './ApplicationUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ApplicationUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ApplicationUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export type ApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchemaInfer =
  z.infer<typeof ApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema>
export const ApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema
