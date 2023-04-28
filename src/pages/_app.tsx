import type {AppProps} from 'next/app'
import {NextPage} from "next"
import {Inter} from "next/font/google"
import React, {ReactElement, ReactNode} from "react"
import {QueryClient, QueryClientProvider} from "react-query"
import Layout from "@/components/layout/Layout"

// Next.js support import css file from node_modules.
// import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

// In order to use optimal font in all pages, put variable fonts in _app.tsx.
const inter = Inter({subsets: ['latin']})


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

export const queryClient = new QueryClient()

function App({Component, pageProps}: AppPropsWithLayout) {
  const renderWithLayout = Component.getLayout || function (page) {
    // return <Layout>{page}</Layout>
    return (
      // import react-query library
      <QueryClientProvider client={queryClient}>
        <Layout>{page}</Layout>
      </QueryClientProvider>
    )
  }

  return renderWithLayout(<Component {...pageProps} className={inter.className}/>)
}

export default App
