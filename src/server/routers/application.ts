/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { createRouter } from '~/server/createRouter'
import { prisma } from '~/server/prisma'

/**
 * Default selector for application.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultapplicationSelect = Prisma.validator<Prisma.ApplicationSelect>()({
  id: true,
  fullname: true,
  email: true,
  last_updated: true,
  status: true,
  comments: true,
})

export const applicationRouter = createRouter()
  .query('all', {
    async resolve() {
      /**
       * For pagination you can have a look at this docs site
       * @link https://trpc.io/docs/useInfiniteQuery
       */

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
