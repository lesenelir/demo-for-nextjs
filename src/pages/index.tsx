import Head from 'next/head'
import Link from "next/link"

import styles from '../styles/home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>Demo for Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        Hello world.
        <br/>

        <ul>
          <li><Link href={'/posts'}>Posts Page</Link></li>
          <li><Link href={'/about'}>About Page</Link></li>
          <li><Link href={'/products/1'}>Products Page</Link></li>
          <li><Link href={'/todolist'}>TodoList Page</Link></li>
          <li><Link href={'/alternativeLayout'}>AlternativeLayout Page</Link></li>
        </ul>
      </main>
    </>
  )
}

export default Home
