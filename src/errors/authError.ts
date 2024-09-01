import { AppError } from '../types/error';

export class AuthError extends Error implements AppError {
  statusCode: number;

  constructor(public message: string) {
    super(message);
    this.name = 'AuthError';
    this.statusCode = 401;
  }
}
