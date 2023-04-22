/**
 *  Single-layer Dynamic Routing + getStaticPaths + getStaticProps
 *
 *  NOTE:
 *    If you use getStaticProps in Dynamic Routing, you must use getStaticPaths.
 *
 *  /posts/1  {id: '1'}
 *  /posts/2  {id: '2'}
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import {NextRouter, useRouter} from "next/router"
import {GetStaticPaths, GetStaticProps} from "next"
import RouterButton from "@/components/utils/RouterButton"

import styles from '../../styles/post.module.css'

interface IPost {
  id: string,
  title: string,
  description: string
}

interface IProps {
  post: IPost
}


async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')  // await fs readFile

  return JSON.parse(jsonData)
}

// which pages should appear
export const getStaticPaths: GetStaticPaths = async () => {
  // get All possible URLs:
  const data: {posts: IPost[]} = await getData()
  const pathsWithParams: any[] = []
  data.posts.map(item => pathsWithParams.push({params: {id: item.id}}))

  // The return paths array indicate the dynamic routing url
  return {
    paths: pathsWithParams,
    fallback: false
  }

  // 当访问量很大的页面，可以设置fallback 为 true，并推迟不常访问的页面
  // fallback为false时，URL路径只配对 paths数组，找不到则渲染404页面
  // fallback为true时，即使不在paths中的路径，也可以渲染一个页面（没定义程序会报错）

  // return {
  //   paths: [
  //     {params: {id: '1'}},
  //     {params: {id: '2'}}
  //   ],
  //   fallback: false
  // }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {params} = context
  const postId = params?.id

  const data: {posts: IPost[]} = await getData()
  const post = data.posts.find(item => item.id === postId)

  // fallback === true时，没有找到则渲染一个页面
  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}


function Post(props: IProps) {
  const router: NextRouter = useRouter()
  const {post} = props

  return (
    <div className={styles.box}>
      <h2>Post Page</h2>

      <p>Path: {router.query.id}</p>
      <br/>

      <ul>
        <li>{post.id}</li>
        <li>{post.title}</li>
        <li>{post.description}</li>
      </ul>
      <br/>

      <RouterButton/>
    </div>
  )
}

export default Post
