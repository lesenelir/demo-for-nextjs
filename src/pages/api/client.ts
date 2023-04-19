import type {NextApiRequest, NextApiResponse} from 'next'
import mock from '../../../data/posts.json'

type Data = {
  name: string
}

interface IPost {
  id: string
  title: string,
  description: string
}

const allPosts: IPost[] = [...mock.posts]

// RESTFUL API
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(req, req.method, req.query, req.body)

  // simulation CRUD
  switch (req.method) {
    case 'Post':
      allPosts.push(req.body)
      break
    case 'Delete':
      const delete_index = allPosts.findIndex((item: IPost) => item.id === req.body.id)
      if (delete_index >= 0) allPosts.splice(delete_index, 1)
      break
    case 'PUT':
      const put_index = allPosts.findIndex(item => item.id === req.body.id)
      if (put_index >= 0) allPosts.splice(put_index, 1, req.body)
      break
  }

  res.status(200).json(mock) // return JSON.stringify(mock)
}
