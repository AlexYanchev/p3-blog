import { User } from '../common/usersTypes.js';

export function isErrorHaveMessage(error: any): error is Error {
  return 'message' in error ? true : false;
}

export function isValidUserData<OutputType extends {}>(
  data: Record<string, string>,
  requiredFields: Partial<User>
): asserts data is OutputType {
  const dataFields = Object.keys(data);
  const requiredFieldsKeys = Object.keys(requiredFields);
  if (requiredFieldsKeys.length > dataFields.length) {
    throw new Error('Ошибка в переданных данных.');
  }

  const missingFields = requiredFieldsKeys.filter(
    (f) => !dataFields.includes(f)
  );
  if (missingFields.length) {
    throw new Error(`Не указаны данные в полях: ${missingFields.join(', ')}`);
  }
}

// export function isValidUserRegistrationData(
//   data: Record<string, string>
// ): asserts data is RegistrationUserData {
//   const dataFields = Object.keys(data);
//   const requiredFields = Object.keys(RequiredRegistrationDataFields);
//   if (requiredFields.length > dataFields.length) {
//     throw new Error('Ошибка в регистрационных данных.');
//   }

//   const missingFields = requiredFields.filter((f) => !dataFields.includes(f));
//   if (missingFields.length) {
//     throw new Error(`Не указаны данные в полях: ${missingFields.join(', ')}`);
//   }
// }

// export function isValidUserLoginData(
//   data: Record<string, string>
// ): asserts data is LoginUserData {
//   const dataFields = Object.keys(data);
//   const requiredFields = Object.keys(RequiredLoginDataFields);
//   if (requiredFields.length > dataFields.length) {
//     throw new Error('Ошибка в авторизационных данных.');
//   }

//   const missingFields = requiredFields.filter((f) => !dataFields.includes(f));
//   if (missingFields.length) {
//     throw new Error(`Не указаны данные в полях: ${missingFields.join(', ')}`);
//   }
// }
