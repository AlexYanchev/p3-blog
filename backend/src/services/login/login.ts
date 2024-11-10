import { Request, Response } from 'express';
import { DBServices } from '../../db/index.js';
import { isValidUserData } from '../../utils/asserts.js';
import {
  LoginUserData,
  RequiredLoginDataFields,
} from '../../common/usersTypes.js';
import { StatusCode } from '../../common/statusCode.js';

export const loginService = async (req: Request, res: Response) => {
  const data = req.body;
  isValidUserData<LoginUserData>(data, RequiredLoginDataFields);
  const responseDB = await DBServices.login(data);
  const statusCode = responseDB.user
    ? StatusCode.Success
    : StatusCode.Unauthorized;
  res.status(statusCode).json(responseDB);
};
