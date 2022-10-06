import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    provider: z.string(),
    providerAccountId: z.string(),
  })
  .strict()

export type AccountProviderProviderAccountIdCompoundUniqueInputObjectSchemaInfer =
  z.infer<
    typeof AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema
  >
export const AccountProviderProviderAccountIdCompoundUniqueInputObjectSchema =
  Schema
