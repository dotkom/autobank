import { createRouter } from '../createRouter'
import { applicationRouter } from './application'
import superjson from 'superjson'

export const appRouter = createRouter()
  .transformer(superjson)

  .merge('application.', applicationRouter)

export type AppRouter = typeof appRouter
