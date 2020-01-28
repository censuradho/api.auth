/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable no-new */
import bcrypt from 'bcryptjs'

export const hashPassword = (password: string): Promise<string> => (
  new Promise(resolve => {
    bcrypt.hash(password, 8, (err, hash) => {
      if (err) {
        console.log(err)
      }
      resolve(hash)
    })
  })
)

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  const result = await bcrypt.compare(password, hash)
  return result
}
