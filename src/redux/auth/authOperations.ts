import { LogInAttributes, RegisterAttributes } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

function setAuthHeader(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function clearAuthHeader() {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: RegisterAttributes, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials: LogInAttributes, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
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
  }
);
