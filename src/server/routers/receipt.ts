import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { ReceiptCreateInputObjectSchema } from 'prisma/generated/schemas/objects/ReceiptCreateInput.schema'
import { ReceiptUpdateInputObjectSchema } from 'prisma/generated/schemas/objects/ReceiptUpdateInput.schema'
import { z, ZodType } from 'zod'
import { limitedReceiptUpdateInput } from '~/lib/types/zod'
import { createRouter } from '~/server/createRouter'
import { defaultReceiptSelect, prisma } from '~/server/prisma'

export const receiptRouter = createRouter()
  // create
  .mutation('add', {
    input: ReceiptCreateInputObjectSchema.omit({
      id: true,
    }) as ZodType<Prisma.ReceiptCreateInput>,
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
      data: limitedReceiptUpdateInput,
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
      data: ReceiptUpdateInputObjectSchema,
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
