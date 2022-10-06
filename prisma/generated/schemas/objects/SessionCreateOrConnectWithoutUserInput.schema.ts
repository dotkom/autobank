import { z } from 'zod'
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema'
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
      z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export type SessionCreateOrConnectWithoutUserInputObjectSchemaInfer = z.infer<
  typeof SessionCreateOrConnectWithoutUserInputObjectSchema
>
export const SessionCreateOrConnectWithoutUserInputObjectSchema = Schema
