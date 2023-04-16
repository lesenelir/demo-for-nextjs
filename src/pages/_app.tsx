import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Next.js support import css file from node_modules.
// import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
