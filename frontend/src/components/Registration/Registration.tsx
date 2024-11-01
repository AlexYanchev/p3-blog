import { Form } from 'react-router-dom';
import styles from './Registration.module.css';
import { UrlRoutes } from '../../types/routes';
import customFetch from '../../utils/customFetch';

export const registrationAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const jsonString = JSON.stringify(Object.fromEntries(formData.entries()));
  return customFetch(UrlRoutes.register, {
    method: 'POST',
    body: jsonString,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const Registration = () => {
  return (
    <Form method='post'>
      <label htmlFor='login'>Логин: </label>
      <input type='text' id='login' name='login' placeholder='Логин...' />
      <label htmlFor='login'>Пароль: </label>
      <input
        type='password'
        id='password'
        name='password'
        placeholder='Пароль...'
      />
      <button type='submit'>Зарегистрироваться</button>
    </Form>
  );
};
export default Registration;
