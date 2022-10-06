import { z } from 'zod'
import { ApplicationScalarWhereInputObjectSchema } from './ApplicationScalarWhereInput.schema'
import { ApplicationUpdateManyMutationInputObjectSchema } from './ApplicationUpdateManyMutationInput.schema'
import { ApplicationUncheckedUpdateManyWithoutApplicationsInputObjectSchema } from './ApplicationUncheckedUpdateManyWithoutApplicationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ApplicationUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => ApplicationUncheckedUpdateManyWithoutApplicationsInputObjectSchema
      ),
    ]),
  })
  .strict()

export type ApplicationUpdateManyWithWhereWithoutUserInputObjectSchemaInfer =
  z.infer<typeof ApplicationUpdateManyWithWhereWithoutUserInputObjectSchema>
export const ApplicationUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
