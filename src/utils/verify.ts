import {NextApiRequest} from "next"
import jwt from "jsonwebtoken"
import {prisma} from "@/utils/server"
import {IncomingMessage} from "http";
import {NextApiRequestCookies} from "next/dist/server/api-utils";

export const getUserFromRequest = async (req: IncomingMessage & {cookies: NextApiRequestCookies}) => {
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
