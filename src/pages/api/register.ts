// 注册创建用户的后端API
import {PrismaClient} from "@prisma/client"
import {NextApiRequest, NextApiResponse} from "next"
import nc from 'next-connect'
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const handler = nc<NextApiRequest, NextApiResponse>()

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const {username, password} = req.body

  if (!username || !password) {
    return res.status(400).json({message: 'Both name and password fields are required'})
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        // 数据库保存的字段是name 和 password
        name: username,
        password: hashedPassword
      }
    })
    return res.status(201).json(newUser)
  } catch (e) {
    return res.status(500).json({message: 'Error Registering.', e})
  }
}

handler.post(register)

export default handler
