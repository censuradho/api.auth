import { model, Schema, Document } from 'mongoose'

export type Sheet = {
  exercises?: [{ name: string, charge: number, series: number[] }],
  weight?: number,
  heigh?: number,
  note?: string, 
} & Document

const SchemaSheet = new Schema(
  {
    exercises: [{ name: String, charge: Number, series: [Number] }],
    weight: Number,
    heigh: Number,
    note: String, 
  },
  {
    timestamps: true
  }
)


export default model<Sheet>('Sheet', SchemaSheet)