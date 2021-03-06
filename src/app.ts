import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

// routes
import authRoutes from './routes/auth'
import sheetRoutes from './routes/sheet'

const app: express.Application = express()

dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-anovo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

// middlewars
app.use(express.json())
app.use(cors())
app.use(authRoutes)
app.use(sheetRoutes)

export default app
