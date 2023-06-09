import Head from 'next/head'
import Link from "next/link"
import {GetStaticProps} from "next"

import styles from '../styles/home.module.css'

interface IData {
  host: string,
  user: string,
  pass: string
}

interface IProps {
  data: IData
}

export const getStaticProps: GetStaticProps = async () => {
  const data = {
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    pass: process.env.DB_PASS
  }

  return {
    props: {
      data
    }
  }
}

function Home(props: IProps) {
  const {data} = props

  return (
    <>
      <Head>
        <title>Demo for Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h4>Hello Next.js</h4>
        <p>Data from environment variables: </p>
        <p>{data.host} - {data.user} - {data.pass}</p>
        <br/>

        <ul>
          {/* The Link component is provided to do the client-side route transition. */}
          <li><Link href={'/posts'}>Posts Page</Link></li>
          <li><Link href={'/about'}>About Page</Link></li>
          <li><Link href={'/products/1'}>Products Page</Link></li>
          <li><Link href={'/todolist'}>TodoList Page</Link></li>
          <li><Link href={'/alternativeLayout'}>AlternativeLayout Page</Link></li>
          <li><Link href={'/client'}>Client Side Page</Link></li>
          <li><Link href={'/books'}>Books Page</Link></li>
          <li><Link href={'/app'}>Application Examples</Link></li>
        </ul>
      </main>
    </>
  )
}

export default Home
