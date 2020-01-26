/* eslint-disable no-new */
import Jwt from 'jsonwebtoken'
import fs from 'fs'

const certPriv = fs.readFileSync(`${__dirname}/rsa-private.pem`)

export const generateToken = async (payload?: any) => {
  const token = await Jwt.sign(payload, certPriv, { algorithm: 'HS256' })
  return token
}

export const verifyToken = async (token: string): Promise<string | object | boolean> => {
  const User = await Jwt.verify(token, certPriv)

  if (!User) return false
  return User
}
