import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { OnlinepottenCreateInputObjectSchema } from 'prisma/generated/schemas/objects/OnlinepottenCreateInput.schema'
import { OnlinepottenUpdateInputObjectSchema } from 'prisma/generated/schemas/objects/OnlinepottenUpdateInput.schema'
import { z, ZodType } from 'zod'
import { limitedOnlinepottenUpdateInput } from '~/lib/types/zod'
import { createRouter } from '~/server/createRouter'
import { defaultOnlinepottenSelect, prisma } from '~/server/prisma'

export const onlinepottenRouter = createRouter()
  // create
  .mutation('add', {
    input: OnlinepottenCreateInputObjectSchema.omit({
      id: true,
    }) as ZodType<Prisma.OnlinepottenCreateInput>,
    async resolve({ input }) {
      // if user exists connect user
      const onlinepotten = await prisma.onlinepotten.create({
        data: input,
        select: defaultOnlinepottenSelect,
      })
      return onlinepotten
    },
  })

  .query('byId', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input
      const onlinepotten = await prisma.onlinepotten.findUnique({
        where: { id },
        select: defaultOnlinepottenSelect,
      })
      if (!onlinepotten) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No onlinepotten with id '${id}'`,
        })
      }
      return onlinepotten
    },
  })

  .mutation('useredit', {
    input: z.object({
      id: z.string().uuid(),
      data: limitedOnlinepottenUpdateInput,
    }),
    async resolve({ input }) {
      const { id, data } = input
      const onlinepotten = await prisma.onlinepotten.update({
        where: { id },
        data,
        select: defaultOnlinepottenSelect,
      })
      // on sucess notify email with update

      return onlinepotten
    },
  })
  // delete
  .mutation('delete', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const { id } = input
      const onlinepotten = await prisma.onlinepotten.findUnique({
        where: { id },
        select: defaultOnlinepottenSelect,
      })
      if (!onlinepotten) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No onlinepotten with id '${id}'`,
        })
      }
      if (
        onlinepotten.application.userId &&
        ctx.session &&
        ctx.session.user &&
        onlinepotten.application.userId !== ctx.session.user.id
      )
        await prisma.onlinepotten.delete({ where: { id } })
      // on sucess notify email with update
      return {
        id,
      }
    },
  })
  .middleware(async ({ ctx, next }) => {
    if (!ctx.session || ctx.session.user!.role === 'USER') {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next()
  })
  // read
  .query('all', {
    async resolve() {
      /**
       * For pagination you can have a look at this docs site
       * @link https://trpc.io/docs/useInfiniteQuery
       */

      return prisma.onlinepotten.findMany({
        select: defaultOnlinepottenSelect,
      })
    },
  })
  .mutation('edit', {
    input: z.object({
      id: z.string().uuid(),
      data: OnlinepottenUpdateInputObjectSchema,
    }),
    async resolve({ input }) {
      const { id, data } = input
      const onlinepotten = await prisma.onlinepotten.update({
        where: { id },
        data,
        select: defaultOnlinepottenSelect,
      })
      // on sucess notify email with update

      return onlinepotten
    },
  })
  .mutation('approve', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      if (!ctx.session || !ctx.session.user)
        throw new TRPCError({ code: 'UNAUTHORIZED' })
      const { id } = input
      await prisma.onlinepotten.update({
        where: { id },
        data: {
          application: {
            update: {
              status: 'approved',
              updatedBy: { connect: { id: ctx.session.user.id } },
            },
          },
        },
        select: defaultOnlinepottenSelect,
      })
      // on sucess notify email with update

      return {
        id,
      }
    },
  })
  .mutation('reject', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      if (!ctx.session || !ctx.session.user)
        throw new TRPCError({ code: 'UNAUTHORIZED' })
      const { id } = input
      await prisma.onlinepotten.update({
        where: { id },
        data: {
          application: {
            update: {
              status: 'rejected',
              updatedBy: { connect: { id: ctx.session.user.id } },
            },
          },
        },
        select: defaultOnlinepottenSelect,
      })
      // on sucess notify email with update

      return {
        id,
      }
    },
  })
