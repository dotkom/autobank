import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { InvoiceCreateInputObjectSchema } from 'prisma/generated/schemas/objects/InvoiceCreateInput.schema'
import { InvoiceUpdateInputObjectSchema } from 'prisma/generated/schemas/objects/InvoiceUpdateInput.schema'
import { z, ZodType } from 'zod'
import { limitedInvoiceUpdateInput } from '~/lib/types/zod'
import { createRouter } from '~/server/createRouter'
import { defaultInvoiceSelect, prisma } from '~/server/prisma'

export const invoiceRouter = createRouter()
  // create
  .mutation('add', {
    input: InvoiceCreateInputObjectSchema.omit({
      id: true,
    }) as ZodType<Prisma.InvoiceCreateInput>,
    async resolve({ input }) {
      // if user exists connect user
      const invoice = await prisma.invoice.create({
        data: input,
        select: defaultInvoiceSelect,
      })
      return invoice
    },
  })

  .query('byId', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input
      const invoice = await prisma.invoice.findUnique({
        where: { id },
        select: defaultInvoiceSelect,
      })
      if (!invoice) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No invoice with id '${id}'`,
        })
      }
      return invoice
    },
  })

  .mutation('useredit', {
    input: z.object({
      id: z.string().uuid(),
      data: limitedInvoiceUpdateInput,
    }),
    async resolve({ input }) {
      const { id, data } = input
      const invoice = await prisma.invoice.update({
        where: { id },
        data,
        select: defaultInvoiceSelect,
      })
      // on sucess notify email with update

      return invoice
    },
  })
  // delete
  .mutation('delete', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const { id } = input
      const invoice = await prisma.invoice.findUnique({
        where: { id },
        select: defaultInvoiceSelect,
      })
      if (!invoice) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No invoice with id '${id}'`,
        })
      }
      if (
        invoice.application.userId &&
        ctx.session &&
        ctx.session.user &&
        invoice.application.userId !== ctx.session.user.id
      )
        await prisma.invoice.delete({ where: { id } })
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

      return prisma.invoice.findMany({
        select: defaultInvoiceSelect,
      })
    },
  })
  .mutation('edit', {
    input: z.object({
      id: z.string().uuid(),
      data: InvoiceUpdateInputObjectSchema,
    }),
    async resolve({ input }) {
      const { id, data } = input
      const invoice = await prisma.invoice.update({
        where: { id },
        data,
        select: defaultInvoiceSelect,
      })
      // on sucess notify email with update

      return invoice
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
      await prisma.invoice.update({
        where: { id },
        data: {
          application: {
            update: {
              status: 'approved',
              updatedBy: { connect: { id: ctx.session.user.id } },
            },
          },
        },
        select: defaultInvoiceSelect,
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
      await prisma.invoice.update({
        where: { id },
        data: {
          application: {
            update: {
              status: 'rejected',
              updatedBy: { connect: { id: ctx.session.user.id } },
            },
          },
        },
        select: defaultInvoiceSelect,
      })
      // on sucess notify email with update

      return {
        id,
      }
    },
  })
