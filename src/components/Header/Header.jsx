import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Header() {
  const isloggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Link to="/">Home</Link>

      {isloggedIn ? (
        <NavLink>logout</NavLink>
      ) : (
        <ul>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
