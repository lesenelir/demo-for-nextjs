import {NextApiRequest} from "next"
import jwt from "jsonwebtoken"
import {prisma} from "@/utils/server"

export const getUserFromRequest = async (req: NextApiRequest) => {
  try {
    const token = req.cookies['token']
    // verify token
    if (token) {
      const payload: any = jwt.verify(token, process.env.JWT_SECRET as string)
      return await prisma.user.findUnique({ // return user
        where: {
          name: payload.username
        }
      })
    }
  } catch (e) {
    return null
  }
}
