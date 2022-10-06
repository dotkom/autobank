import { z } from 'zod'
import { OnlinepottenCreateInputObjectSchema } from './objects/OnlinepottenCreateInput.schema'

export const OnlinepottenCreateOneSchema = z.object({
  data: OnlinepottenCreateInputObjectSchema,
})
