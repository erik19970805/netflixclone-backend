import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { IUser } from '@src/interfaces/IUser';
import User from '@src/models/User';

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password }: IUser = req.body;
    const newUser = new User({ username, email, password: bcrypt.hashSync(password, 12) });
    await newUser.save();
    return res.json({ message: 'Your account was created successfully' });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUser = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json('Wrong password or email!');
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json('Wrong password or email!');
    return res.json(user);
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};
