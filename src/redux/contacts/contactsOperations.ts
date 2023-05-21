import { NewContactAttributes, ContactAttributes } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/create',
  async (contact: NewContactAttributes, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/edit',
  async ({ id, name, number }: ContactAttributes, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);
