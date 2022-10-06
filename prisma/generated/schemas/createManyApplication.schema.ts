import { z } from 'zod'
import { ApplicationCreateManyInputObjectSchema } from './objects/ApplicationCreateManyInput.schema'

export const ApplicationCreateManySchema = z.object({
  data: ApplicationCreateManyInputObjectSchema,
})
