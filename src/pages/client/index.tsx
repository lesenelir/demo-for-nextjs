import {useEffect, useState} from "react"
import RouterButton from "@/components/utils/RouterButton"

import styles from '../../styles/client.module.css'

interface IPost {
  id: string,
  title: string,
  description: string
}

// API Route => client side rendering
function ClientSidePage() {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect( () => {
    // connect to the outside system
    const fetData = async () => {
      try {
        // Call API Route
        const response =  await fetch('/api/client') // Response Object
        const data = await response.json() // 响应数据需要先从响应体中解析出来
        setPosts(data.posts)
      } catch (error) {
        console.log(error)
      }
    }

    fetData()
  }, [])

  return (
    <div className={styles.box}>
      Client Page
      <br/>

      {
        posts ? posts.map(item => (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.description}</li>
          </ul>
        )) : <p>Loading</p>
      }

      <RouterButton/>
    </div>
  )
}

export default ClientSidePage
