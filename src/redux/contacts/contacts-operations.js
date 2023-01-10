import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyAboutError = () => {
  toast.error(`Ooops... something went wrong, please try again later.`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const notifyAboutSuccess = text => {
  toast.info(text, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      notifyAboutError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, contact);

      notifyAboutSuccess(
        `${contact.name} is successfully added to your contacts.`
      );
      return response.data;
    } catch (error) {
      notifyAboutError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id, name }, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      notifyAboutSuccess(`${name} is now deleted from your contacts.`);
      return response.data;
    } catch (error) {
      notifyAboutError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
