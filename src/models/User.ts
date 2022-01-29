import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '@src/interfaces/IUser';

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: '' },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true },
);

userSchema.methods.matchPassword = async function matchPassword(password: string) {
  let match = false;
  if (this.password) match = await bcrypt.compare(password, this.password);
  return match;
};

userSchema.methods.toJSON = function toJSON() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default model('User', userSchema);
