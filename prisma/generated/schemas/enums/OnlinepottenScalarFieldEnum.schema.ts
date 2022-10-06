import { z } from 'zod'

export const OnlinepottenScalarFieldEnumSchema = z.enum([
  'id',
  'occasion',
  'planned_date',
  'hours',
  'description',
  'participants',
  'payment_method',
  'receipt_id',
  'applicationId',
])
