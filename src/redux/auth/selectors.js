import { useSelector } from "react-redux";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
