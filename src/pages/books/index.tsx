import {useMutation, useQuery} from "react-query"
import axios from "axios"
import RouterButton from "@/components/utils/RouterButton"

import styles from '../../styles/books.module.css'
import {queryClient} from "@/pages/_app";

interface IBook {
  userId: number,
  id: number,
  title: string,
  body: string
}

async function getBooks() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  console.log(res)
  return res.data
}

async function addBooks({title, body}: {title: string, body: string}) {
  await axios.post('https://jsonplaceholder.typicode.com/posts', {
    title,
    body
  })
}


function BooksPage() {
  // const [books, setBooks] = useState([]) // 省去了state来保存请求回来的数据和effect中修改state

  // 用useQuery将请求套一层，并给一个key值
  const getBooksQuery = useQuery('getBooks', getBooks)
  console.log(getBooksQuery)

  // 对资源进行修改是mutation
  const addBooksMutation = useMutation(addBooks)

  const handleAddPost = () => {
    addBooksMutation.mutate({title: 'foo', body: 'bar'}, {
      onSuccess(data) {
        // 请求成功后执行
        queryClient.invalidateQueries('getBooks') // 使'getBooks'的key失效，则所有key为getBooks的Query都会被重新请求，更新数据到UI
      }
    })
  }


  return (
    <div className={styles.box}>
      {getBooksQuery.isLoading && <div>Loading...</div>}
      {getBooksQuery.isError && <div>Something Error...</div>}
      {getBooksQuery.data?.map((book: IBook) => (
        <div key={book.id} className={styles.content}>
          <p>Book Title: {book.title}</p>
        </div>
      ))}

      {addBooksMutation.isLoading && <div>Adding Book</div>}
      <button onClick={handleAddPost}>Add Book</button>
      <RouterButton/>
    </div>
  )
}

export default BooksPage
