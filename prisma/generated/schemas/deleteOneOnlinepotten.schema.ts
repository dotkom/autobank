import { z } from 'zod'
import { OnlinepottenWhereUniqueInputObjectSchema } from './objects/OnlinepottenWhereUniqueInput.schema'

export const OnlinepottenDeleteOneSchema = z.object({
  where: OnlinepottenWhereUniqueInputObjectSchema,
})
