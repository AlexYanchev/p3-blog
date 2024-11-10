import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import blogsRoute from './routes/blogs/blogs.js';
import registerRoute from './routes/registration/registration.js';
import connectDB from './db/index.js';
import loginRoute from './routes/login/login.js';

dotenv.config({
  path: path.resolve(process.cwd(), '../.env'),
});

export const db = connectDB();

const app = express();

if (!process.env.PORT) {
  throw new Error('Не указан порт приложения');
}
if (!process.env.CORS_FRONTEND) {
  throw new Error('Не указан url фронтента. ');
}

app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 3000);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: [process.env.CORS_FRONTEND] }));

app.use('/api/', blogsRoute, registerRoute, loginRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

//////////////////////////////////////////////////////////////////////////////

// type Obj = {
//   _id: number;
//   name: string;
//   age: number;
// };
// const _user = { _id: 1, name: 'John', age: 30 };
// const pickedUser = pickProperties(_user, ['name', 'age']); // корректный
// const pickedUser2 = pickProperties(_user, ['name', 'age2']); // некорректный

// function pickProperties(obj: Obj, arr: Array<keyof Obj>): Partial<Obj> | false {
//   let t: Record<string, number | string> = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] in obj)) {
//       return false;
//     }
//     t[arr[i]] = obj[arr[i]];
//   }

//   return t;
// }

// console.log(pickedUser);
// console.log(pickedUser2);

// interface User {
//   type: 'user';
//   name: string;
//   age: number;
//   occupation: string;
// }

// interface Admin {
//   type: 'admin';
//   name: string;
//   age: number;
//   role: string;
// }

// export type Person = User | Admin;

// export const persons: Person[] = [
//   {
//     type: 'user',
//     name: 'Max Mustermann',
//     age: 25,
//     occupation: 'Chimney sweep',
//   },
//   {
//     type: 'admin',
//     name: 'Jane Doe',
//     age: 32,
//     role: 'Administrator',
//   },
//   {
//     type: 'user',
//     name: 'Kate Müller',
//     age: 23,
//     occupation: 'Astronaut',
//   },
//   {
//     type: 'admin',
//     name: 'Bruce Willis',
//     age: 64,
//     role: 'World saver',
//   },
//   {
//     type: 'user',
//     name: 'Wilson',
//     age: 23,
//     occupation: 'Ball',
//   },
//   {
//     type: 'admin',
//     name: 'Agent Smith',
//     age: 23,
//     role: 'Administrator',
//   },
// ];

// export const isAdmin = (person: Person): person is Admin =>
//   person.type === 'admin';
// export const isUser = (person: Person): person is User =>
//   person.type === 'user';

// export function logPerson(person: Person) {
//   let additionalInformation = '';
//   if (isAdmin(person)) {
//     additionalInformation = person.role;
//   }
//   if (isUser(person)) {
//     additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// function getObjectKeys() {

// }

// function filterUsers(
//   persons: Person[],
//   personType: 'admin',
//   criteria: Partial<Omit<Admin, 'type'>>
// ): Array<Admin>;
// function filterUsers(
//   persons: Person[],
//   personType: 'user',
//   criteria: Partial<Omit<User, 'type'>>
// ): Array<User>;
// function filterUsers(
//   persons: Person[],
//   personType: 'admin' | 'user',
//   criteria: Partial<Omit<Person, 'type'>>
// ): Array<Person> {
//   return persons
//     .filter((p) => p.type === personType)
//     .filter((user) => {
//       const criteriaKeys = Object.keys(criteria) as (keyof Omit<
//         Person,
//         'type'
//       >)[];
//       return criteriaKeys.every((fieldName) => {
//         return user[fieldName] === criteria[fieldName];
//       });
//     });
// }

// console.log('Users of age 23:');

// filterUsers(persons, 'user', {
//   age: 23,
// }).forEach(logPerson);
