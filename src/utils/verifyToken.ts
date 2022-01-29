import { tokens } from '@src/config/env';
import { IAccessToken } from '@src/interfaces/IUser';
import User from '@src/models/User';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const verify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.headers.authorization;
    if (!accessToken) return res.status(401).json({ error: 'You are not authenticated!' });
    const { id } = <IAccessToken>jwt.verify(accessToken, tokens.accessToken);
    if (!id) return res.status(403).json({ error: 'Token is not valid!' });
    const user = await User.findById(id);
    if (!user) return res.status(401).json({ error: 'You must create an account!' });
    req.user = user;
    return next();
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const admin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user.role !== 'admin') return res.status(401).json({ error: 'you are not authorized' });
    return next();
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};
