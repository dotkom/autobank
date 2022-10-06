import { z } from 'zod'

export const InvoiceScalarFieldEnumSchema = z.enum([
  'id',
  'orgnr',
  'occasion',
  'method',
  'po_nr',
  'duedays',
  'applicationId',
])
