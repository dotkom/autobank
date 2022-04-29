import { PrismaClient } from '@prisma/client'

export const client = new PrismaClient()

export type Context = {
  prisma: PrismaClient
}
