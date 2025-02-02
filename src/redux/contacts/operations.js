import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const contacts = axios.create({
  baseURL: "https://67953053aad755a134eb7129.mockapi.io",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await contacts.get("/contacts");
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const response = await contacts.post("/contacts", contact);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      await contacts.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
