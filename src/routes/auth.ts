import { Router } from 'express'

import UsersController from '../controllers/Users'

const authRoutes = Router()

authRoutes.post('/signup', UsersController.store)
authRoutes.post('/signin', UsersController.index)

export default authRoutes
