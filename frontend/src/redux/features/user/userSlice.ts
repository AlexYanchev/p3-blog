import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export type UserState = {
  id: string;
  name: string;
  login: string;
  email: string;
};
