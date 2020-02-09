import { Router } from 'express'

// controllers
import sheetControllers from '../controllers/Sheet'

const sheetRoutes = Router()

sheetRoutes.post('/sheet/:_id', sheetControllers.store)

export default sheetRoutes