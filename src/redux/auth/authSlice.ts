import { authState } from '@/types/redux';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledRefresh,
  handleFulfilledRegister,
  handlePending,
  handlePendingRefresh,
  handleRejected,
  handleRejectedRefresh,
} from './authHandlers';
import { logIn, logOut, refreshUser, register } from './authOperations';

const initialState: authState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(logIn.fulfilled, handleFulfilledLogIn)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        handleRejected
      ),
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
