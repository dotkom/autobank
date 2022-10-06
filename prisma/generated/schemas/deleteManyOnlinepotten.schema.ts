import { z } from 'zod'
import { OnlinepottenWhereInputObjectSchema } from './objects/OnlinepottenWhereInput.schema'

export const OnlinepottenDeleteManySchema = z.object({
  where: OnlinepottenWhereInputObjectSchema.optional(),
})
