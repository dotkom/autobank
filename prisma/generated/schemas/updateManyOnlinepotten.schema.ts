import { z } from 'zod'
import { OnlinepottenUpdateManyMutationInputObjectSchema } from './objects/OnlinepottenUpdateManyMutationInput.schema'
import { OnlinepottenWhereInputObjectSchema } from './objects/OnlinepottenWhereInput.schema'

export const OnlinepottenUpdateManySchema = z.object({
  data: OnlinepottenUpdateManyMutationInputObjectSchema,
  where: OnlinepottenWhereInputObjectSchema.optional(),
})
