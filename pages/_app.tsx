import React from 'react'
import 'reflect-metadata'
import 'styles/index.css'
import { SessionProvider, useSession } from 'next-auth/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Layout from 'components/Layout/Public/'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <GraphqlProvider>
        <Layout
          title="Online Autobank"
          className="flex flex-col m-10 divide-y-2 p-5"
        >
          <Component {...pageProps} />
        </Layout>
      </GraphqlProvider>
    </SessionProvider>
  )
}

const GraphqlProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()
  const client = new ApolloClient({
    uri: `${process.env.NEXTAUTH_URL}/api/graphql`,

    cache: new InMemoryCache(),
  })
  const adminclient = new ApolloClient({
    uri: `${process.env.NEXTAUTH_URL}/api/admin/graphql`,

    cache: new InMemoryCache(),
  })
  return (
    <ApolloProvider client={session?.user?.role !== 'USER' ? client : client}>
      {children}
    </ApolloProvider>
  )
}
