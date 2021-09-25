import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { signUpBodySchema } from '../schemas/signUpBodySchema';
import { SignUpBody } from '../interfaces/signUpBodyInterface';

import * as service from '../services/user';

export async function signUp(req: Request, res: Response) {
  const { name, image, email, password } = req.body as SignUpBody;

  const validate = signUpBodySchema.validate(req.body);
  if (validate.error) return res.sendStatus(httpStatus.UNAUTHORIZED);

  const user = await service.createNewUser({ name, image, email, password });
  res.status(httpStatus.CREATED).send(user);
}
