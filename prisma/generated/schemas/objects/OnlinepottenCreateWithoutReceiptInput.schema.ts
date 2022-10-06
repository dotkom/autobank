import { z } from 'zod'
import { OnlinepottenCreateparticipantsInputObjectSchema } from './OnlinepottenCreateparticipantsInput.schema'
import { ApplicationCreateNestedOneWithoutOnlinepottenInputObjectSchema } from './ApplicationCreateNestedOneWithoutOnlinepottenInput.schema'

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
    application: z.lazy(
      () => ApplicationCreateNestedOneWithoutOnlinepottenInputObjectSchema
    ),
  })
  .strict()

export type OnlinepottenCreateWithoutReceiptInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenCreateWithoutReceiptInputObjectSchema
>
export const OnlinepottenCreateWithoutReceiptInputObjectSchema = Schema
