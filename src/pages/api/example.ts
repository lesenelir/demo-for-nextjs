/**
 * 在 Web 开发中，一个实际的中间件例子是用户登录验证。假设你有一个网站，只允许登录的用户访问特定的页面。这时，你可以使用一个身份验证中间件。
 *
 * 当用户尝试访问受保护的页面时，身份验证中间件会首先检查用户是否已登录。
 * 如果用户已登录，中间件会将请求传递给下一个中间件或服务器进行处理；如果用户未登录，中间件则可能会重定向用户至登录页面。
 * 在这个过程中，中间件帮助你实现了用户身份的检查和权限控制，而你不需要在每个受保护页面都编写相同的验证逻辑。
 *
 * 如果某一个中间件不满足，则会中断请求
 */

import {NextApiRequest, NextApiResponse} from "next"
import nc, {NextHandler} from 'next-connect'

/**
  以下为Express编写中间件的例子：

function authMiddleware(req, res, next) {
  if (req.cookies.token) {
    const user = getUserByToken(req.cookies.token)
    req.user = user
    next()
  } else {
    res.statusCode = 403
    res.send('please sign in first')
  }
}

 // 不使用中间件的路由
 app.get('/', (req, res) => {
  res.send('hello world')
 })

 // 使用这个中间件的路由
 app.get('/profile', authMiddleware, (req, res) => {
  res.send('welcome!')
 })
**/

// 验证身份的中间件函数：
function authMiddleware(req: NextApiRequest, res: NextApiResponse, next: NextHandler) {
  const authToken = req.headers['authorization']

  // 对authToken进行验证
  if (authToken && authToken === 'dataset_token') {
    next() // 验证通过，继续执行后续的处理
  } else {
    res.status(403)
    res.send('please sign in first')
  }
}

// 跨域请求的中间件函数：
function corsMiddleware(req: NextApiRequest, res: NextApiResponse, next: NextHandler) {
  res.setHeader('Access-Control-Allow-Origin', '*') // 允许所有来源的访问
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  next() // 进入到下一个中间件
}

// 创建API路由中的handler函数
const handler = nc<NextApiRequest, NextApiResponse>()

// 使用中间件
handler.use(corsMiddleware)
handler.use(authMiddleware)

// handler处理GET请求
handler.get((req:NextApiRequest, res:NextApiResponse) => {
  res.status(200).json({message: 'get request successful!'})
})

// handler处理POST请求
handler.post((req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/html') // 返回一个html
  res.status(200).send('<h1>Hello, this is a GET request</h1>')
})

export default handler
