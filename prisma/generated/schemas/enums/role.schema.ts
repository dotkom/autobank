import { z } from 'zod'

export const roleSchema = z.enum(['USER', 'ADMIN', 'SUPERADMIN'])
