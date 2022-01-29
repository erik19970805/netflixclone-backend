/* eslint-disable no-unused-vars */
import { IUserMode } from '@src/interfaces/IUser';
import express from 'express';

declare global {
  namespace Express {
    interface Request {
      user: IUserMode;
    }
  }
}
