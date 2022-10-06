import { z } from 'zod'
import { ApplicationUpdateInputObjectSchema } from './objects/ApplicationUpdateInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './objects/ApplicationWhereUniqueInput.schema'

export const ApplicationUpdateOneSchema = z.object({
  data: ApplicationUpdateInputObjectSchema,
  where: ApplicationWhereUniqueInputObjectSchema,
})
