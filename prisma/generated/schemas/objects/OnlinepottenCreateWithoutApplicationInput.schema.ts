import { z } from 'zod'
import { OnlinepottenCreateparticipantsInputObjectSchema } from './OnlinepottenCreateparticipantsInput.schema'
import { ReceiptCreateNestedOneWithoutOnlinepottenInputObjectSchema } from './ReceiptCreateNestedOneWithoutOnlinepottenInput.schema'

import type { Prisma } from '@prisma/client'

const Schema = z
  .object({
    id: z.string().optional(),
    occasion: z.string(),
    planned_date: z.date(),
    hours: z.number(),
    description: z.string(),
    participants: z
      .union([
        z.lazy(() => OnlinepottenCreateparticipantsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    payment_method: z.string().optional(),
    receipt: z
      .lazy(() => ReceiptCreateNestedOneWithoutOnlinepottenInputObjectSchema)
      .optional(),
  })
  .strict()

export type OnlinepottenCreateWithoutApplicationInputObjectSchemaInfer =
  z.infer<typeof OnlinepottenCreateWithoutApplicationInputObjectSchema>
export const OnlinepottenCreateWithoutApplicationInputObjectSchema = Schema
