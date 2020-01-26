import { Router, Request, Response } from 'express'
import { authenticateToken } from '../utils/authenticateTocken'

const postsRoutes = Router()
type User = Request & { user: object | string };

postsRoutes.post('/posts', (req: User, res: Response) => {
  authenticateToken(req, res)
})

export default postsRoutes
