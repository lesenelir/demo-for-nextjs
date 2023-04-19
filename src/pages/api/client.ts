import type {NextApiRequest, NextApiResponse} from 'next'
import mock from '../../../data/posts.json'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(mock) // return JSON.stringify(mock)
}
