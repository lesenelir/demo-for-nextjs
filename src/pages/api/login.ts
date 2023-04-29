// 用户登陆的后端API接口
import {PrismaClient} from "@prisma/client"
import {NextApiRequest, NextApiResponse} from "next"
import nc from 'next-connect'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {serialize} from 'cookie'

const prisma = new PrismaClient()

const handler = nc<NextApiRequest, NextApiResponse>()

const handleLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const {username, password} = req.body

  if (!username || !password) {
    return res.status(400).json({message: 'Both name and password fields are required'})
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        name: username
      }
    })

    if (!user) return res.status(404).json({message: 'User not found.'})

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(401).json({message: 'Invalid password.'})

    // generate jwt
    const token: string = jwt.sign({
      username: user.name
    }, process.env.JWT_SECRET as string, {expiresIn: '3 days'}) // 私钥为了安全都设置为环境变量，且gitignore

    const cookie: string = serialize('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 3
    })

    res.setHeader('Set-Cookie', cookie)
    return res.status(200).json({message: 'Login Successful.'})
  } catch (e) {
    return res.status(500).json({message: 'Error occurred during Login.', e})
  }

}

handler.post(handleLogin)

export default handler
