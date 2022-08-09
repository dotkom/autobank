import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { createRouter } from '~/server/createRouter'
import { prisma } from '~/server/prisma'
import { receiptRouter } from './receipt'

/**
 * Default selector for application.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultapplicationSelect = Prisma.validator<Prisma.ApplicationSelect>()({
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

export const applicationRouter = createRouter()
  .merge('receipt.', receiptRouter)
  .query('all', {
    async resolve() {
      return prisma.application.findMany({
        select: defaultapplicationSelect,
      })
    },
  })
  .query('byId', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input
      const application = await prisma.application.findUnique({
        where: { id },
        select: defaultapplicationSelect,
      })
      if (!application) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No application with id '${id}'`,
        })
      }
      return application
    },
  })
  // delete
  .mutation('delete', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input
      await prisma.application.delete({ where: { id } })
      return {
        id,
      }
    },
  })
