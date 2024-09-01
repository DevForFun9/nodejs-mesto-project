import { AppError } from '../types/error';

export class ForbiddenError extends Error implements AppError {
  statusCode: number;

  constructor(public message: string) {
    super(message);
    this.name = 'ForbiddenError';
    this.statusCode = 403;
  }
}
