import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/selectors";

const contacts = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const token = selectToken(thunkApi.getState());
      const response = await contacts.get("/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      });
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
      const token = selectToken(thunkApi.getState());
      const response = await contacts.post("/contacts", contact, {
        headers: { Authorization: `Bearer ${token}` },
      });
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
      const token = selectToken(thunkApi.getState());
      await contacts.delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return id;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
