import { ContactsState } from '@/types/redux';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  handleFulfilledCreate,
  handleFulfilledDelete,
  handleFulfilledEdit,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from './contactsHandlers';
import {
  createContact,
  deleteContact,
  editContact,
  getContacts,
} from './contactsOperations';

const initialState: ContactsState = {
  items: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getContacts.pending, state => handlePending(state, 'fetching'))
      .addCase(createContact.pending, state => handlePending(state, 'creating'))
      .addCase(deleteContact.pending, state => handlePending(state, 'deleting'))
      .addCase(editContact.pending, state => handlePending(state, 'updating'))
      .addCase(getContacts.fulfilled, handleFulfilledGet)
      .addCase(createContact.fulfilled, handleFulfilledCreate)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(editContact.fulfilled, handleFulfilledEdit)
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          createContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        handleRejected
      ),
});

export const contactsReducer = contactsSlice.reducer;
