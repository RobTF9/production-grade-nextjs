// fixes a bug for next-auth and mongodb atlas somehow
// https://github.com/nextauthjs/next-auth/issues/833
import 'reflect-metadata'
import React from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
