/* eslint-disable no-new */
import Jwt, { Secret } from 'jsonwebtoken'
import { ProcessEnvOptions } from 'child_process'

type Env = Secret & ProcessEnvOptions
export const generateToken = async (payload?: any) => {
  const token = await Jwt.sign(payload, process.env.SECRET_KEY as Env, { algorithm: 'HS256' })
  return token
}

export const verifyToken = async (token: string): Promise<string | object | boolean> => {
  const User = await Jwt.verify(token, process.env.SECRET_KEY as Env)

  if (!User) return false
  return User
}
