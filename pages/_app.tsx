import React from 'react'
import { AppProps } from 'next/app'
import 'reflect-metadata'
import '../styles/index.css'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {' '}
      <Component {...pageProps} />{' '}
    </SessionProvider>
  )
}
