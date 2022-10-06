import { z } from 'zod'
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema'
import { AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema'
import { AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AccountUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export type AccountUpdateWithWhereUniqueWithoutUserInputObjectSchemaInfer =
  z.infer<typeof AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema>
export const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
