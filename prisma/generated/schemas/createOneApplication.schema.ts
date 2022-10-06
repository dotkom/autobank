import { z } from 'zod'
import { ApplicationCreateInputObjectSchema } from './objects/ApplicationCreateInput.schema'

export const ApplicationCreateOneSchema = z.object({
  data: ApplicationCreateInputObjectSchema,
})
