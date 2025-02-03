import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContacts, fetchContacts, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const contacSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((elem) => elem.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});

export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,
  (state) => state.filters.name,
  (contacts, filter) => {
    const lowerCaseFilter = filter?.toLowerCase() || "";
    return contacts.filter((contact) =>
      contact.name?.toLowerCase().includes(lowerCaseFilter)
    );
  }
);

export default contacSlice.reducer;
