/* eslint-disable new-cap */
import { Router } from 'express';
import { makeInvoker } from 'awilix-express';
import {validator} from '../validation/validator';
import BasicController from '../controllers/basic.controller';
import { task1, task2 } from '../validation/basic.validation';
import Authenticate from '../middlewares/authorize.middleware';
const auth = makeInvoker(Authenticate);
const router = Router(), basicController = makeInvoker(BasicController);

router.post('/task1', validator.body(task1), basicController('task1'));
router.post('/task2', validator.body(task2), basicController('task2'));
router.post('/task3', validator.body(task1), basicController('task3'));
 //router.delete('/:blogId', auth('verifyToken'), auth('isStaff'),blogController('deleteBlog'));


export default router;