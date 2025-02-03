import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import style from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.contain}>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
