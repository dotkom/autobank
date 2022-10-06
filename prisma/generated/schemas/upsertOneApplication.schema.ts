import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './objects/ApplicationWhereUniqueInput.schema'
import { ApplicationCreateInputObjectSchema } from './objects/ApplicationCreateInput.schema'
import { ApplicationUpdateInputObjectSchema } from './objects/ApplicationUpdateInput.schema'

export const ApplicationUpsertSchema = z.object({
  where: ApplicationWhereUniqueInputObjectSchema,
  create: ApplicationCreateInputObjectSchema,
  update: ApplicationUpdateInputObjectSchema,
})
