import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

import ConflictError from '../errors/ConflictError';

export default function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) {
  if (err instanceof ConflictError) {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    message: 'Internal Server Error!',
  });
}
