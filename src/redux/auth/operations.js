import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../contacts/operations";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (info, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", info);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (info, thunkApi) => {
  try {
    const response = await axios.post("/users/login", info);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkApi.rejectWithValue("No token found");
    }

    try {
      setAuthHeader(token);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
