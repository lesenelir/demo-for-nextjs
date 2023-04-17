import type {AppProps} from 'next/app'
import {NextPage} from "next"
import React, {ReactElement, ReactNode} from "react"
import Layout from "@/components/layout/Layout"

// Next.js support import css file from node_modules.
// import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'


// export default function App({Component, pageProps}: AppProps) {
//   return <Component {...pageProps} />
//
//   return (
//     <Layout>
//       <Component {...pageProps}/>
//     </Layout>
//   )
//
// }

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({Component, pageProps}: AppPropsWithLayout) {
  const renderWithLayout = Component.getLayout || function (page) {
    return <Layout>{page}</Layout>
  }

  return renderWithLayout(<Component {...pageProps}/>)
}

export default App
