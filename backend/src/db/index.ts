import { open, Database } from 'sqlite';
import sqlite3 from 'sqlite3';
import { registration } from './services/registration/registration.js';
import { login } from './services/login/login.js';

const SQLite = sqlite3.verbose();

const connectDB = () => {
  const db = new SQLite.Database('../database.db');
  db.exec(`
      CREATE TABLE IF NOT EXISTS users
      (
          id TEXT PRIMARY KEY,
          login TEXT UNIQUE NOT NULL CHECK(login != ''),
          name TEXT NOT NULL CHECK(name != ''),
          email TEXT UNIQUE NOT NULL CHECK(email != ''),
          password TEXT NOT NULL CHECK(password != '')
      )
      `);

  console.log('Создали таблицу users в БД ');

  return db;
};

export const DBServices = {
  registration,
  login,
};

export default connectDB;
