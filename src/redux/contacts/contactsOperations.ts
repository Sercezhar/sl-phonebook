import { ContactAttributes, NewContactAttributes } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error('Failed to retrieve data');
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
      toast.success('Contact created');
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error('Failed to create the contact');
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
      toast.success('Contact deleted');
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error('Failed to delete the contact');
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
      toast.success('Contact edited');
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error('Failed to edit the contact');
        return rejectWithValue(error.message);
      }
    }
  }
);
