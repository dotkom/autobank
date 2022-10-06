import { z } from 'zod'
import { OnlinepottenCreateparticipantsInputObjectSchema } from './OnlinepottenCreateparticipantsInput.schema'
import { ReceiptCreateNestedOneWithoutOnlinepottenInputObjectSchema } from './ReceiptCreateNestedOneWithoutOnlinepottenInput.schema'
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
    receipt: z
      .lazy(() => ReceiptCreateNestedOneWithoutOnlinepottenInputObjectSchema)
      .optional(),
    application: z.lazy(
      () => ApplicationCreateNestedOneWithoutOnlinepottenInputObjectSchema
    ),
  })
  .strict()

export type OnlinepottenCreateInputObjectSchemaInfer = z.infer<
  typeof OnlinepottenCreateInputObjectSchema
>
export const OnlinepottenCreateInputObjectSchema = Schema
