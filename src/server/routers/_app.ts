import { createRouter } from '../createRouter'
import { applicationRouter } from './application'
import superjson from 'superjson'
import { z } from 'zod'

export const appRouter = createRouter()
  .mutation('login', {
    // using zod schema to validate and infer input values
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      // Here some login stuff would happen

      return 'noice ' + input.id
    },
  })

  .merge('application.', applicationRouter)

export type AppRouter = typeof appRouter
