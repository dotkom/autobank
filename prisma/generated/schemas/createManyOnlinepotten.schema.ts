import { z } from 'zod'
import { OnlinepottenCreateManyInputObjectSchema } from './objects/OnlinepottenCreateManyInput.schema'

export const OnlinepottenCreateManySchema = z.object({
  data: OnlinepottenCreateManyInputObjectSchema,
})
