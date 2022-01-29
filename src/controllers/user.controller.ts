import { IUser } from '@src/interfaces/IUser';
import User from '@src/models/User';
import { Request, Response } from 'express';
import { Aggregate, PipelineStage } from 'mongoose';

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json({ user });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    if (req.params.id !== String(req.user._id))
      return res.status(403).json({ error: 'You can update only your account!' });
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: user,
      },
      { new: true },
    );
    return res.json({ user: updatedUser });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    if (req.params.id !== String(req.user._id))
      return res.status(403).json({ error: 'You can delete only your account!' });
    await User.findByIdAndDelete(req.user._id);
    return res.json({ message: 'User has been deleted' });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};
