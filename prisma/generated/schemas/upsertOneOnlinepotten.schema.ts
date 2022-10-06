import { z } from 'zod'
import { OnlinepottenWhereUniqueInputObjectSchema } from './objects/OnlinepottenWhereUniqueInput.schema'
import { OnlinepottenCreateInputObjectSchema } from './objects/OnlinepottenCreateInput.schema'
import { OnlinepottenUpdateInputObjectSchema } from './objects/OnlinepottenUpdateInput.schema'

export const OnlinepottenUpsertSchema = z.object({
  where: OnlinepottenWhereUniqueInputObjectSchema,
  create: OnlinepottenCreateInputObjectSchema,
  update: OnlinepottenUpdateInputObjectSchema,
})
