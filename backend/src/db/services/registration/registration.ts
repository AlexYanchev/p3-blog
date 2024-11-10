import type { RegistrationUserData } from '../../../common/usersTypes.js';
import crypto from 'crypto';
import { getHashPassword } from '../../../utils/hash.js';
import { db } from '../../../index.js';

export const registration = async (
  data: RegistrationUserData
): Promise<{ result: boolean; message?: string }> => {
  const id = crypto.randomUUID();
  try {
    const hashPassword = await getHashPassword(data.password);
    const resultInsert = await new Promise<{
      changes: number;
    }>((resolve, reject) => {
      const keys = Object.keys(data) as Array<keyof RegistrationUserData>;
      const values = keys.map((v) =>
        v === 'password' ? hashPassword : data[v]
      );
      const valuesPrepare = new Array(keys.length + 1).fill('?');
      db.run(
        `INSERT INTO users (id, ${keys.join(
          ', '
        )}) VALUES (${valuesPrepare.join(', ')})`,
        [id, ...values],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({
              changes: this.changes,
            });
          }
        }
      );
    });

    if (resultInsert.changes) {
      return { result: true, message: 'Регистрация прошла успешно.' };
    } else {
      return { result: false };
      // throw new Error('Ошибка при регистрации');
    }
  } catch (error) {
    const e = error as Error;
    const eArray = e.message.split(': ');
    if (eArray[1].startsWith('UNIQUE')) {
      const isEmail = eArray[2].split('.')[1] === 'email';
      let field = '';
      if (isEmail) {
        field = 'Почта';
      }

      return {
        result: false,
        message: `Пользователь с такими данными уже существует. Поля, которые нужно поменять: ${field}`,
      };
    } else {
      throw new Error('Ошибка БД');
    }
  }
};
