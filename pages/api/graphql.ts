import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-micro'
import { buildSchema, buildTypeDefsAndResolvers } from 'type-graphql'
import { client, Context } from '../../prisma'

import 'reflect-metadata'
import path from 'path'
import {
  ApplicationCrudResolver,
  InvoiceCrudResolver,
  OnlinepottenCrudResolver,
  ReciptCrudResolver,
  FindUniqueUserResolver,
  FindManyUserResolver,
  ApplicationRelationsResolver,
} from '../../prisma/graphql'

const apolloServer = new ApolloServer({
  schema: await buildSchema({
    resolvers: [
      ApplicationCrudResolver,
      InvoiceCrudResolver,
      OnlinepottenCrudResolver,
      ReciptCrudResolver,
      FindUniqueUserResolver,
      FindManyUserResolver,
      ApplicationRelationsResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  }),
  context: (): Context => ({ prisma: client }),
})

const startServer = apolloServer.start()

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  console.log('starting')

  await startServer
  console.log('started')

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
