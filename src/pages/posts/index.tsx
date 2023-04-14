/**
 *  Static Generation Demo
 */
import {GetStaticProps} from "next"

import styles from '../../styles/posts.module.css'

interface IProps {
  id: number,
  title: string
}

function Posts(props: IProps[]) {
  const {posts} = props
  console.log(posts)

  return (
    <div className={styles.box}>
      Post Page.
      <br/>

      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default Posts


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
