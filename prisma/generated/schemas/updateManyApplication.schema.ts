import { z } from 'zod'
import { ApplicationUpdateManyMutationInputObjectSchema } from './objects/ApplicationUpdateManyMutationInput.schema'
import { ApplicationWhereInputObjectSchema } from './objects/ApplicationWhereInput.schema'

export const ApplicationUpdateManySchema = z.object({
  data: ApplicationUpdateManyMutationInputObjectSchema,
  where: ApplicationWhereInputObjectSchema.optional(),
})
