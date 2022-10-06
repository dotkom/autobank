import { z } from 'zod'
import { ApplicationScalarWhereInputObjectSchema } from './ApplicationScalarWhereInput.schema'
import { ApplicationUpdateManyMutationInputObjectSchema } from './ApplicationUpdateManyMutationInput.schema'
import { ApplicationUncheckedUpdateManyWithoutUpdatedApplicationsInputObjectSchema } from './ApplicationUncheckedUpdateManyWithoutUpdatedApplicationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    where: z.lazy(() => ApplicationScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ApplicationUpdateManyMutationInputObjectSchema),
      z.lazy(
        () =>
          ApplicationUncheckedUpdateManyWithoutUpdatedApplicationsInputObjectSchema
      ),
    ]),
  })
  .strict()

export type ApplicationUpdateManyWithWhereWithoutUpdatedByInputObjectSchemaInfer =
  z.infer<
    typeof ApplicationUpdateManyWithWhereWithoutUpdatedByInputObjectSchema
  >
export const ApplicationUpdateManyWithWhereWithoutUpdatedByInputObjectSchema =
  Schema
