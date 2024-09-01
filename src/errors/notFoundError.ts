import {
  NOT_FOUND_ERROR_CODE,
  NOT_FOUND_ERROR_NAME,
} from '../constants';
import { AppError } from '../types/error';

export class NotFoundError extends Error implements AppError {
  statusCode: number;

  constructor(public message: string) {
    super(message);
    this.name = NOT_FOUND_ERROR_NAME;
    this.statusCode = NOT_FOUND_ERROR_CODE;
  }
}
