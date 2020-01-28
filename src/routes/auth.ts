import { Router } from 'express'

import UsersController from '../controllers/Users'

const authRoutes = Router()

authRoutes.post('/api.signup', UsersController.store)
authRoutes.post('/api.signin', UsersController.index)

export default authRoutes
