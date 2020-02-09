import { Request, Response } from 'express'

import SheetSchema, { Sheet } from '../model/Sheet'
// import User from '../model/User'

export default {

  async store (req: Request, res: Response): Promise<void | Response> {
    const { note, exercises, weight, heigh  } = req.body as Sheet
    const { _id } = req.query

    const update = { note, exercises, weight, heigh }

    const filter = { _id }


    try {
      const sheet = await SheetSchema.findOneAndUpdate(filter, update, { new: true })
      console.log(sheet)
      res.json({ message: 'Ficha cadastrada com sucesso.'})
    } catch (err) {
      console.log(err)
      res.json({ err: 'Não foi possível concluir a ação.'}).status(204)
    }
  }

}