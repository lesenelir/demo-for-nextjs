import type {AppProps} from 'next/app'
import Layout from "@/components/layout/Layout"

import '@/styles/globals.css'

// Next.js support import css file from node_modules.
// import 'bootstrap/dist/css/bootstrap.css'

export default function App({Component, pageProps}: AppProps) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}
