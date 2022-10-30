import { Response } from 'express';

export interface ISignup {
  name: string;
  email: string;
  role: string;
  password: string;
  res: Response;
}
