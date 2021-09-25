import './setup';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import router from './routers';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/home', async (_req, res) => {
  res.send('OK!');
});

app.use(router);
app.use(errorMiddleware);

export default app;
export async function init() {
  await connectDatabase();
}
