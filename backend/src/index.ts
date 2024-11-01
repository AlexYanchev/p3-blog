import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import blogsRoute from './routes/blogs/index.js';
import registerRoute from './routes/registration/index.js';

dotenv.config({
  path: path.resolve(process.cwd(), '../.env'),
});

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

app.use(blogsRoute, registerRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
