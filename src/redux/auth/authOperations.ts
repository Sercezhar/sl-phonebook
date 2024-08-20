import { AuthorizedUser } from '@/types/redux';
import {
  LogInAttributes,
  RegisterAttributes,
  UserAttributes,
} from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://connections-api.goit.global';

function setAuthHeader(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function clearAuthHeader() {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk<
  AuthorizedUser,
  RegisterAttributes,
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
    toast.success('Registration successful');
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error('Failed to register');
      return rejectWithValue(error.message);
    }
  }
});

export const logIn = createAsyncThunk<
  AuthorizedUser,
  LogInAttributes,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    toast.success('Logged in successfully');
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error('Wrong email or password');
      return rejectWithValue(error.message);
    }
  }
});

export const logOut = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
      toast.success('Logged out successfully');
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error('Failed to log out');
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshUser = createAsyncThunk<
  UserAttributes,
  void,
  { rejectValue: string }
>('auth/refresh', async (_, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const { token } = state.auth;

  if (!token) {
    return rejectWithValue('No token found');
  }

  setAuthHeader(token);

  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
