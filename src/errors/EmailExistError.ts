import { AppError } from '../types/error';

export class EmailExistError extends Error implements AppError {
  statusCode: number;

  constructor(public message: string) {
    super(message);
    this.name = 'EmailExistError';
    this.statusCode = 409;
  }
}
