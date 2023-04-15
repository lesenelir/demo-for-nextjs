/**
 *  Single-layer Dynamic Routing
 *
 *  /posts/1  {id: '1'}
 *  /posts/2  {id: '2'}
 */
import {NextRouter, useRouter} from "next/router"

import styles from '../../styles/post.module.css'

function Post() {
  const router: NextRouter = useRouter()
  console.log(router.query)

  return (
    <div className={styles.box}>
      <h2>Post Page</h2>
      <p>Path: {router.query.id}</p>
    </div>
  )
}

export default Post
