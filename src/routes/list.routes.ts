import { createList, getLists } from '@src/controllers/list.controller';
import { admin, verify } from '@src/utils/verifyToken';
import { Router } from 'express';

const router = Router();

router.route('/').all(verify).get(getLists).post(admin, createList);

export default router;
