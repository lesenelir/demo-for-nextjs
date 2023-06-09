import nc from "next-connect"
import * as Boom from "@hapi/boom"
import { NextApiRequest, NextApiResponse } from "next"
import {PrismaClient} from '@prisma/client'

// @ts-ignore
export const prisma: PrismaClient = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") { // @ts-ignore
  global.prisma = prisma
}

export const apiHandler = () =>
  nc<NextApiRequest, NextApiResponse>({
    onError(err, req, res) {
      if (Boom.isBoom(err)) {
        console.log(err)
        res.status(err.output.payload.statusCode)
        res.json({
          error: err.output.payload.error,
          message: err.output.payload.message
        })
      } else {
        res.status(500)
        res.json({
          message: "Unexpected error"
        })
        console.error(err)
      }
    }
  })
