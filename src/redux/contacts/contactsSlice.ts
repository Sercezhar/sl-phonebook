import { ContactAttributes } from '@/types';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {
  createContact,
  deleteContact,
  editContact,
  getContacts,
} from './contactsOperations';

interface ContactsState {
  items: ContactAttributes[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: '',
};

function handleFulfilled(state: ContactsState) {
  state.isLoading = false;
  state.error = null;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = payload;
      })
      .addCase(createContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = state.items.map(item =>
          item.id === payload.id ? payload : item
        );
      })
      .addMatcher(
        isAnyOf(
          getContacts.pending,
          createContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          createContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        (state, { error }) => {
          state.isLoading = false;
          state.error = error.message || 'Something went wrong';
        }
      ),
});

export const contacts = (state: RootState) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
