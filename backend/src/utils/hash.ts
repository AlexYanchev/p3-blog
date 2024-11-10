import crypto from 'crypto';

export const getHashPassword = async (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!process.env.SECRET) {
      throw new Error('Не указан секрет. Невозможно работать с хэшем пароля.');
    }
    crypto.pbkdf2(
      password,
      process.env.SECRET,
      1000,
      64,
      `sha512`,
      (err, dk) => {
        if (err) {
          reject(err);
        }
        resolve(dk.toString('hex'));
      }
    );
  });
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return (await getHashPassword(password)) === hash;
};
