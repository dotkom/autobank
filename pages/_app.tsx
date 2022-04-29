import React from 'react'
import { AppProps } from 'next/app'
import 'reflect-metadata'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
