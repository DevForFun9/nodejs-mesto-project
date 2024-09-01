import {
  DEFAULT_ERROR_CODE,
  DEFAULT_ERROR_NAME,
} from '../constants';
import { AppError } from '../types/error';

export class DefaultError extends Error implements AppError {
  statusCode: number;

  constructor(public message: string) {
    super(message);
    this.name = DEFAULT_ERROR_NAME;
    this.statusCode = DEFAULT_ERROR_CODE;
  }
}
