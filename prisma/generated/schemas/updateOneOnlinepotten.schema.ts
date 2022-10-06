import { z } from 'zod'
import { OnlinepottenUpdateInputObjectSchema } from './objects/OnlinepottenUpdateInput.schema'
import { OnlinepottenWhereUniqueInputObjectSchema } from './objects/OnlinepottenWhereUniqueInput.schema'

export const OnlinepottenUpdateOneSchema = z.object({
  data: OnlinepottenUpdateInputObjectSchema,
  where: OnlinepottenWhereUniqueInputObjectSchema,
})
