import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next'
import { buildSchema } from 'type-graphql'
import Cors from 'cors'
import { resolvers } from '../../../prisma/graphql'
import { prisma } from '../../../prisma'
import { getSession } from 'next-auth/react'

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
    origin: '*',
  })
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  await cors(req, res)
  if (session.user.role === 'USER') res.status(401).json('you must be admin')

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers,
    }),
    context: () => ({ prisma }),
  })

  await apolloServer.start()

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
