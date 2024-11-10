import { Request, Response } from 'express';
import { DBServices } from '../../db/index.js';
import { isValidUserData } from '../../utils/asserts.js';
import {
  RegistrationUserData,
  RequiredRegistrationDataFields,
} from '../../common/usersTypes.js';

export const registrationService = async (req: Request, res: Response) => {
  const regData = req.body;
  isValidUserData<RegistrationUserData>(
    regData,
    RequiredRegistrationDataFields
  );
  const result = await DBServices.registration(regData);
  res.status(200).json(result);
};
