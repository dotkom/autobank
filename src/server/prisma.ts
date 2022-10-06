/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */
import { env } from './env'
import { Prisma, PrismaClient } from '@prisma/client'

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient
}

export const prisma: PrismaClient =
  prismaGlobal.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (env.NODE_ENV !== 'production') {
  prismaGlobal.prisma = prisma
}

// default selects
export const defaultApplicationSelect =
  Prisma.validator<Prisma.ApplicationSelect>()({
    id: true,
    userId: true,
    fullname: true,
    email: true,
    created_at: true,
    approved_at: true,
    last_updated: true,
    status: true,
    responsible_committee: true,
    comments: true,
    error: true,
    error_fields: true,
  })

export const defaultReceiptSelect = Prisma.validator<Prisma.ReceiptSelect>()({
  id: true,
  type: true,
  account: true,
  card: true,
  paid_at: true,
  amount: true,
  occasion: true,
  appendix: true,
  application: {
    select: defaultApplicationSelect,
  },
})

export const defaultOnlinepottenSelect =
  Prisma.validator<Prisma.OnlinepottenSelect>()({
    id: true,
    occasion: true,
    planned_date: true,
    hours: true,
    description: true,
    participants: true,
    payment_method: true,
    application: {
      select: defaultApplicationSelect,
    },
  })

export const defaultInvoiceSelect = Prisma.validator<Prisma.InvoiceSelect>()({
  id: true,
  application: {
    select: defaultApplicationSelect,
  },
})
