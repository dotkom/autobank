import { z, ZodObject, ZodType } from 'zod'
import { ApplicationUpdateInputObjectSchema } from 'prisma/generated/schemas/objects/ApplicationUpdateInput.schema'
import { ReceiptUpdateInputObjectSchema } from 'prisma/generated/schemas/objects/ReceiptUpdateInput.schema'
import { OnlinepottenUpdateInputObjectSchema } from 'prisma/generated/schemas/objects/OnlinepottenUpdateInput.schema'
import { InvoiceUpdateInputObjectSchema } from 'prisma/generated/schemas/objects/InvoiceUpdateInput.schema'
import { Prisma } from '@prisma/client'

export const limitedApplicationUpdateInput =
  ApplicationUpdateInputObjectSchema.pick({
    fullname: true,
    email: true,
    responsible_committee: true,
    comments: true,
  })

export const limitedReceiptUpdateInput = ReceiptUpdateInputObjectSchema.pick({
  type: true,
  amount: true,
  date: true,
  description: true,
  category: true,
  account: true,
  user: true,
}).merge(
  z.object({ application: limitedApplicationUpdateInput })
) as ZodType<Prisma.ReceiptUpdateInput>

export const limitedOnlinepottenUpdateInput =
  OnlinepottenUpdateInputObjectSchema.pick({
    occasion: true,
    planned_date: true,
    hours: true,
    description: true,
    participants: true,
    payment_method: true,
  }).merge(
    z.object({ application: limitedApplicationUpdateInput })
  ) as ZodType<Prisma.OnlinepottenUpdateInput>

export const limitedInvoiceUpdateInput = InvoiceUpdateInputObjectSchema.merge(
  z.object({ application: limitedApplicationUpdateInput })
) as ZodType<Prisma.InvoiceUpdateInput>
