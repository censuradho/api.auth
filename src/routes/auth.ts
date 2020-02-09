import { Router } from 'express'

import UsersController from '../controllers/Users'

const authRoutes = Router()

authRoutes.post('/api.signup', UsersController.store)
authRoutes.post('/api.signin', UsersController.index)
authRoutes.get('/api/:email', UsersController.find)

export default authRoutes
