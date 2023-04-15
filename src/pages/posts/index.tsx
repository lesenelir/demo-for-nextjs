/**
 *  Static Generation Demo
 */
import Link from "next/link"
import {GetStaticProps} from "next"

import styles from '../../styles/posts.module.css'

interface IProps {
  id: number,
  title: string
}

function Posts(props: IProps[]) {
  const {posts} = props

  return (
    <div className={styles.box}>
      Post Page.
      <br/>

      <ul>
        {/*{posts.map(post => <li key={post.id}>{post.title}</li>)}*/}
        {posts.map(post => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
      </ul>
    </div>
  )
}

export default Posts

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // simulate request
  const posts = await getContent()

  return {
    props: {
      posts
    }
  }
}

function getContent() {
  const content = [
    {id: 1, title: 'web dev'},
    {id: 2, title: 'gm web3'},
    {id: 3, title: 'english'},
    {id: 4, title: 'react'}
  ]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content)
    }, 1000)
  })
}
