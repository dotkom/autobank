import { z } from 'zod'

export const statusTypeSchema = z.enum(['pending', 'approved', 'rejected'])
