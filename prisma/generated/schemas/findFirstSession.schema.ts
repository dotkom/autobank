import { z } from 'zod'
import { SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema'
import { SessionOrderByWithRelationInputObjectSchema } from './objects/SessionOrderByWithRelationInput.schema'
import { SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema'
import { SessionScalarFieldEnumSchema } from './enums/SessionScalarFieldEnum.schema'

export const SessionFindFirstSchema = z.object({
  where: SessionWhereInputObjectSchema.optional(),
  orderBy: SessionOrderByWithRelationInputObjectSchema.optional(),
  cursor: SessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SessionScalarFieldEnumSchema).optional(),
})
