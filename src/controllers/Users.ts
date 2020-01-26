import { Request, Response } from 'express'

// utils
import { hashPassword, comparePassword } from '../utils/hashpass'
import { generateToken } from '../utils/token'

import User from '../model/User'

// erros
import {
  USER_ALREADY_EXIST,
  PASSWORD_NOT_MATCH,
  USER_ERROR_CREDENTOALS
} from '../erros'

type User = { password: string; email: string }
type NewUser = User & { rePassword: string }

export default {

  async store (req: Request, res: Response): Promise<void | Response> {
    const { password, rePassword, email }: NewUser = req.body

    if (password !== rePassword) {
      return res.status(401).json({ err: PASSWORD_NOT_MATCH })
    }

    const checkUserExist = await User.findOne({ email })

    if (checkUserExist) {
      return res.status(401).json({ err: USER_ALREADY_EXIST })
    }

    const encriptedPassword = await hashPassword(password)

    const payload = {
      ist: Date.now() + 3600
    }

    try {
      await User.create({
        password: encriptedPassword,
        email
      })

      const token = await generateToken(payload)

      return res.json({ token })
    } catch (err) {
      console.log(err)
    }
  },

  async index (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as User

    const findUser = await User.findOne({ email })
    if (!findUser) {
      return res.status(404).json({ err: USER_ERROR_CREDENTOALS })
    }

    const isMatch = await comparePassword(password, findUser.password)
    if (!isMatch) {
      return res.status(404).json({ err: USER_ERROR_CREDENTOALS })
    }

    const payload = {
      ist: Date.now() + 3600,
      admin: false
    }

    const token = await generateToken(payload)
    return res.json({ token })
  }
}
