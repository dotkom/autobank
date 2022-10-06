import { z } from 'zod'
import { ApplicationWhereInputObjectSchema } from './objects/ApplicationWhereInput.schema'

export const ApplicationDeleteManySchema = z.object({
  where: ApplicationWhereInputObjectSchema.optional(),
})
