import { z } from 'zod'

export const receiptTypeSchema = z.enum(['card', 'deposit'])
