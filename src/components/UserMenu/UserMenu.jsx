import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectName } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import style from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectName);

  return (
    <div className={style.contain}>
      <NavLink to="/contacts" className={style.contactsLink}>
        Contacts
      </NavLink>
      <p>Welcome, {user}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
