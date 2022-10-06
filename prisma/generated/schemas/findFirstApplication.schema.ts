import { z } from 'zod'
import { ApplicationWhereInputObjectSchema } from './objects/ApplicationWhereInput.schema'
import { ApplicationOrderByWithRelationInputObjectSchema } from './objects/ApplicationOrderByWithRelationInput.schema'
import { ApplicationWhereUniqueInputObjectSchema } from './objects/ApplicationWhereUniqueInput.schema'
import { ApplicationScalarFieldEnumSchema } from './enums/ApplicationScalarFieldEnum.schema'

export const ApplicationFindFirstSchema = z.object({
  where: ApplicationWhereInputObjectSchema.optional(),
  orderBy: ApplicationOrderByWithRelationInputObjectSchema.optional(),
  cursor: ApplicationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ApplicationScalarFieldEnumSchema).optional(),
})
