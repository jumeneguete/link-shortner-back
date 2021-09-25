import { Router } from 'express';
import userRouter from './user';

const router = Router();

router.use('/sign-up', userRouter);

export default router;
