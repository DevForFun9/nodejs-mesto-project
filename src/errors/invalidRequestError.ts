import {
  INVALID_REQUEST_ERROR_CODE,
  INVALID_REQUEST_ERROR_NAME,
} from '../constants';
import { AppError } from '../types/error';

export class InvalidRequestError extends Error implements AppError {
  statusCode: number;

  constructor(public message: string) {
    super(message);
    this.name = INVALID_REQUEST_ERROR_NAME;
    this.statusCode = INVALID_REQUEST_ERROR_CODE;
  }
}
