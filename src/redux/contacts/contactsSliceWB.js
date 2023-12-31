import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsWB,
  addContactWB,
  deleteContactWB,
  updateContact,
} from './operationsWithBackend';
import { logOut } from 'redux/auth/authOperations';

const handlePending = state => {
  state.phonebook.isLoading = true;
};
const handleReject = (state, action) => {
  state.phonebook.isLoading = false;
  state.phonebook.isError = action.payload;
};

const contactsSliceWB = createSlice({
  name: 'contactsSliceWB',
  initialState: {
    phonebook: {
      items: [],
      isLoading: false,
      isError: null,
    },
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContactsWB.pending]: handlePending,
    [addContactWB.pending]: handlePending,
    [deleteContactWB.pending]: handlePending,
    [fetchContactsWB.rejected]: handleReject,
    [addContactWB.rejected]: handleReject,
    [deleteContactWB.rejected]: handleReject,
    [fetchContactsWB.fulfilled](state, action) {
      state.phonebook.isLoading = false;
      state.phonebook.isError = null;
      state.phonebook.items = action.payload.allContacts;
    },
    [addContactWB.fulfilled](state, action) {
      state.phonebook.isLoading = false;
      state.phonebook.isError = null;
      state.phonebook.items.push(action.payload);
    },
    [deleteContactWB.fulfilled](state, action) {
      state.phonebook.isLoading = false;
      state.phonebook.isError = null;
      const indx = state.phonebook.items.findIndex(contact => contact.id === action.payload.id);
      state.phonebook.items.splice(indx, 1);
    },
    [logOut.fulfilled](state) {
      state.phonebook.isLoading = false;
      state.phonebook.isError = null;
      state.phonebook.items = [];
    },
    [updateContact.fulfilled](state, action) {
      const indx = state.phonebook.items.findIndex(contact => contact.id === action.payload.id);
      state.phonebook.items.splice(indx, 1, action.payload);
    },
  },
});

export const { changeFilter, updateUserLocal } = contactsSliceWB.actions;
export const contactsReducerWB = contactsSliceWB.reducer;
