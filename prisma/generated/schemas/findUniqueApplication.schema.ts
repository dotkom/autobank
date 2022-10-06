import { z } from 'zod'
import { ApplicationWhereUniqueInputObjectSchema } from './objects/ApplicationWhereUniqueInput.schema'

export const ApplicationFindUniqueSchema = z.object({
  where: ApplicationWhereUniqueInputObjectSchema,
})
