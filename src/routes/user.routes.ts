import { deleteUser, getUser, getUsers, updateUser } from '@src/controllers/user.controller';
import { admin, verify } from '@src/utils/verifyToken';
import { Router } from 'express';

const router = Router();

router.route('/:id').get(getUser).all(verify).put(updateUser).delete(deleteUser);
router.route('/').get(verify, admin, getUsers);

export default router;
