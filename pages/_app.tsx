import React from 'react'
import 'reflect-metadata'
import 'styles/index.css'
import { SessionProvider, useSession } from 'next-auth/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log(session)

  return (
    <SessionProvider session={session}>
      <GraphqlProvider>
        <Component {...pageProps} />
      </GraphqlProvider>
    </SessionProvider>
  )
}

const GraphqlProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',

    cache: new InMemoryCache(),
  })
  const adminclient = new ApolloClient({
    uri: 'http://localhost:3000/api/admin/graphql',

    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={session?.user?.role !== 'USER' ? client : client}>
      {children}
    </ApolloProvider>
  )
}
