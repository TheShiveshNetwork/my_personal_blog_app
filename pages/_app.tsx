import React, { useEffect } from 'react'

import Router from 'next/router'
import NProgress from 'nprogress'

import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { Layout } from '../components'


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      NProgress.configure({ showSpinner: false, easing: 'ease', });
      NProgress.start()
    })

    Router.events.on("routeChangeComplete", (url) => {
      NProgress.done()
    });
  }, [Router])

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
