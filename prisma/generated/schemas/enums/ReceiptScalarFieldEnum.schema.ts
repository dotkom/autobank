import { z } from 'zod'

export const ReceiptScalarFieldEnumSchema = z.enum([
  'id',
  'type',
  'account',
  'card',
  'paid_at',
  'amount',
  'occasion',
  'appendix',
  'applicationId',
])
