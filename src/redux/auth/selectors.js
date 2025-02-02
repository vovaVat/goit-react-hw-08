import { useSelector } from "react-redux";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.user.name;

export const selectToken = (state) => state.auth.token;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
