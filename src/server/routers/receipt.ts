import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { createRouter } from '~/server/createRouter'
import { prisma } from '~/server/prisma'

const defaultReceiptSelect = Prisma.validator<Prisma.ReceiptSelect>()({
  id: true,
  type: true,
  account: true,
  card: true,
  paid_at: true,
  amount: true,
  occasion: true,
  appendix: true,
  application: {
    select: {
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
    },
  },
})

export const receiptRouter = createRouter()
  // create
  .mutation('add', {
    input: z.object({
      amount: z.number().min(0),
      occasion: z.string(),
      type: z.enum(['card', 'deposit']),
      account: z.string().optional(),
      card: z.string().optional(),

      appendix: z.array(z.string()),
      application: z.object({
        create: z.object({
          fullname: z.string(),
          email: z.string(),
          user: z
            .object({
              connect: z.object({
                id: z.string(),
              }),
            })
            .optional(),
          responsible_committee: z.string(),
          comments: z.string(),
        }),
      }),
    }),
    async resolve({ input }) {
      // if user exists connect user
      const receipt = await prisma.receipt.create({
        data: input,
        select: defaultReceiptSelect,
      })
      return receipt
    },
  })

  .query('byId', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input
      const receipt = await prisma.receipt.findUnique({
        where: { id },
        select: defaultReceiptSelect,
      })
      if (!receipt) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No receipt with id '${id}'`,
        })
      }
      return receipt
    },
  })

  .mutation('useredit', {
    input: z.object({
      id: z.string().uuid(),
      data: z.object({
        amount: z.number().min(0),
        occasion: z.string(),
        type: z.enum(['card', 'deposit']),
        account: z.string().optional(),
        card: z.string().optional(),
        responsible_committee: z.string(),
        application: z.object({
          update: z.object({
            user: z
              .object({
                connect: z.object({
                  id: z.string(),
                }),
              })
              .optional(),
            appendix: z.array(z.string()),
            fullname: z.string(),
            email: z.string(),
          }),
        }),
      }),
    }),
    async resolve({ input }) {
      const { id, data } = input
      const receipt = await prisma.receipt.update({
        where: { id },
        data,
        select: defaultReceiptSelect,
      })
      // on sucess notify email with update

      return receipt
    },
  })
  // delete
  .mutation('delete', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const { id } = input
      const receipt = await prisma.receipt.findUnique({
        where: { id },
        select: defaultReceiptSelect,
      })
      if (!receipt) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No receipt with id '${id}'`,
        })
      }
      if (
        receipt.application.userId &&
        ctx.session &&
        ctx.session.user &&
        receipt.application.userId !== ctx.session.user.id
      )
        await prisma.receipt.delete({ where: { id } })
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

      return prisma.receipt.findMany({
        select: defaultReceiptSelect,
      })
    },
  })
  .mutation('edit', {
    input: z.object({
      id: z.string().uuid(),
      data: z.object({
        amount: z.number().min(0),
        occasion: z.string(),
        type: z.enum(['card', 'deposit']),
        account: z.string().optional(),
        card: z.string().optional(),
        responsible_committee: z.string(),
        application: z.object({
          update: z.object({
            user: z
              .object({
                connect: z.object({
                  id: z.string(),
                }),
              })
              .optional(),
            comments: z.string(),
            appendix: z.array(z.string()),
            fullname: z.string(),
            email: z.string(),
            status: z.enum(['pending', 'approved', 'rejected']),
            error: z.string().optional(),
            error_fields: z.array(z.string()).optional(),
          }),
        }),
      }),
    }),
    async resolve({ input }) {
      const { id, data } = input
      const receipt = await prisma.receipt.update({
        where: { id },
        data,
        select: defaultReceiptSelect,
      })
      // on sucess notify email with update

      return receipt
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
      await prisma.receipt.update({
        where: { id },
        data: {
          application: {
            update: {
              status: 'approved',
              updatedBy: { connect: { id: ctx.session.user.id } },
            },
          },
        },
        select: defaultReceiptSelect,
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
      await prisma.receipt.update({
        where: { id },
        data: {
          application: {
            update: {
              status: 'rejected',
              updatedBy: { connect: { id: ctx.session.user.id } },
            },
          },
        },
        select: defaultReceiptSelect,
      })
      // on sucess notify email with update

      return {
        id,
      }
    },
  })
