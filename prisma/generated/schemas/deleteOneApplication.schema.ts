import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './objects/ApplicationWhereUniqueInput.schema'

export const ApplicationDeleteOneSchema = z.object({
  where: ApplicationWhereUniqueInputObjectSchema,
})
