import { model, Schema, Document } from 'mongoose'

type User = Document & { email: string; password: string }

const UserShema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: Boolean,
  sheet: {
    type: Schema.Types.ObjectId,
    ref: 'Sheet',
  },
}, {
  timestamps: true
})

export default model<User>('user', UserShema)
