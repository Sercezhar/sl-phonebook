import { ContactAttributes, NewContactAttributes } from '@/types/contact';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const getContacts = createAsyncThunk<
  ContactAttributes[],
  void,
  { rejectValue: string }
>('contacts/get', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error('Failed to retrieve data');
      return rejectWithValue(error.message);
    }
  }
});

export const createContact = createAsyncThunk<
  ContactAttributes,
  NewContactAttributes,
  { rejectValue: string }
>('contacts/create', async (contact, { rejectWithValue }) => {
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
});

export const deleteContact = createAsyncThunk<
  ContactAttributes,
  string,
  { rejectValue: string }
>('contacts/delete', async (id, { rejectWithValue }) => {
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
});

export const editContact = createAsyncThunk<
  ContactAttributes,
  ContactAttributes,
  { rejectValue: string }
>('contacts/edit', async ({ id, name, number }, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(`/contacts/${id}`, { name, number });
    toast.success('Contact edited');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error('Failed to edit the contact');
      return rejectWithValue(error.message);
    }
  }
});
