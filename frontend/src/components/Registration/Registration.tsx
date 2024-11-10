import { useNavigate } from 'react-router-dom';
import styles from './Registration.module.css';
import { UrlRoutes } from '../../types/routes';
import customFetch from '../../utils/customFetch';
import { useState } from 'react';

// export const registrationAction = async ({ request }: { request: Request }) => {
//   const formData = await request.formData();
//   const jsonString = JSON.stringify(Object.fromEntries(formData.entries()));
//   return customFetch(UrlRoutes.register, {
//     method: 'POST',
//     body: jsonString,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

const Registration = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jsonString = JSON.stringify(Object.fromEntries(formData.entries()));
    const { result, message } = await customFetch<{
      result: boolean;
      message?: string;
    }>(UrlRoutes.register, {
      method: 'POST',
      body: jsonString,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (result) {
      navigate('/');
    } else {
      console.log(message);
    }

    setLoading(false);
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <form method='post' onSubmit={onSubmit}>
      <label htmlFor='login'>Логин: </label>
      <input type='text' id='login' name='login' placeholder='Логин...' />
      <label htmlFor='login'>Пароль: </label>
      <input
        type='password'
        id='password'
        name='password'
        placeholder='Пароль...'
      />
      <label htmlFor='name'>Имя: </label>
      <input type='text' id='name' name='name' placeholder='Имя...' />
      <label htmlFor='email'>Email: </label>
      <input type='email' id='email' name='email' placeholder='email...' />
      <button type='submit'>Зарегистрироваться</button>
    </form>
  );
};
export default Registration;
