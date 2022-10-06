import { z } from 'zod'
import { SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'
import { SessionUpdateManyMutationInputObjectSchema } from './SessionUpdateManyMutationInput.schema'
import { SessionUncheckedUpdateManyWithoutSessionsInputObjectSchema } from './SessionUncheckedUpdateManyWithoutSessionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => SessionScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SessionUpdateManyMutationInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateManyWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict()

export type SessionUpdateManyWithWhereWithoutUserInputObjectSchemaInfer =
  z.infer<typeof SessionUpdateManyWithWhereWithoutUserInputObjectSchema>
export const SessionUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
