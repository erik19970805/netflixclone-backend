import { IList } from '@src/interfaces/IList';
import List from '@src/models/List';
import { Request, Response } from 'express';
import { PipelineStage } from 'mongoose';

export const getList = async (req: Request, res: Response) => {
  try {
    return res.json();
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const getLists = async (req: Request, res: Response) => {
  try {
    const { type, genre } = req.query;
    const sample: PipelineStage = { $sample: { size: 10 } };
    let options: PipelineStage[] = [{ ...sample }];
    if (type) {
      options = [{ ...sample }, { $match: { type } }];
      if (genre) options = [{ ...sample }, { $match: { type, genre } }];
    }
    const list = await List.aggregate(options);
    return res.json(list);
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const createList = async (req: Request, res: Response) => {
  try {
    const list: IList = req.body;
    const newList = new List(list);
    await newList.save();
    return res.json({ list: newList });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};

export const deleteList = async (req: Request, res: Response) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    return res.json({ message: 'The list has been delete' });
  } catch (error) {
    const { message } = error as Error;
    return res.status(500).json({ error: message });
  }
};
