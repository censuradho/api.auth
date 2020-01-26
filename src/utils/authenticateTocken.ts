import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/token'

type User = Request & { user: object | string };

export const authenticateToken = (req: User, res: Response): Response | void => {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401)

  const token = authHeader.split(' ')[1]
  const result = verifyToken(token)

  if (!result) return res.status(401)

  req.user = result
}
