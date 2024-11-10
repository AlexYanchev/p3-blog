import { LoginUserData, User } from '../../../common/usersTypes.js';
import { db } from '../../../index.js';
import { isErrorHaveMessage } from '../../../utils/asserts.js';
import { comparePassword } from '../../../utils/hash.js';

export const login = async (
  data: LoginUserData
): Promise<{
  user: Omit<User, 'password'> | null;
  message?: string;
}> => {
  try {
    const user = await new Promise<User | undefined>((resolve, reject) => {
      db.get(
        `SELECT * FROM users WHERE login = ?`,
        [data.login],
        function (err, row: User | undefined) {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });

    if (!user) {
      return {
        user: null,
        message: 'Такого пользователя не существует',
      };
    }

    const comparePass = await comparePassword(data.password, user.password);
    if (!comparePass) {
      return { user: null, message: 'Неверные данные' };
    }

    const { password, ...userWithoutPassword } = user;

    return { user: userWithoutPassword };
  } catch (error) {
    return {
      user: null,
      message: isErrorHaveMessage(error) ? error.message : 'Неизвестная ошибка',
    };
  }
};
