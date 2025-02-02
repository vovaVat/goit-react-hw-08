import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={style.contain}>
      <NavLink to="/register" className={style.register}>
        Register
      </NavLink>
      <NavLink to="/login" className={style.login}>
        Login
      </NavLink>
    </div>
  );
}
