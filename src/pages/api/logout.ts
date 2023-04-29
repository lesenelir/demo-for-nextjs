import {NextApiRequest, NextApiResponse} from "next"
import {serialize} from "cookie"
import nc from "next-connect"

const handler = nc<NextApiRequest, NextApiResponse>()

const handlerLogout = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', serialize('token', 'invalid-value', {
    httpOnly: true,
    path: '/'
  }))

  res.redirect('/app/login')
}

handler.get(handlerLogout)

export default handler
