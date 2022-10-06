import { z } from 'zod'

export const ApplicationScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'fullname',
  'email',
  'created_at',
  'approved_at',
  'updatedById',
  'last_updated',
  'status',
  'responsible_committee',
  'comments',
  'error',
  'error_fields',
])
