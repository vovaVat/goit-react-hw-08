import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const auth = axios.create({
  baseURL: "https://connections-api.goit.global/users",
});

export const register = createAsyncThunk(
  "auth/register",
  async (info, thunkApi) => {
    try {
      console.log(info);
      const response = await auth.post("/signup", info);
      console.log(response);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (info, thunkApi) => {
  try {
    const response = await auth.post("/login", info);
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkApi.rejectWithValue("No token found");
  }

  try {
    await auth.post("/logout", null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return;
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
      const response = await auth.get("/current", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
