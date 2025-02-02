import { useSelector } from "react-redux";
import { AppBar } from "../AppBar/AppBar";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      <AppBar />
      <main>{isRefreshing ? <p>Loading...</p> : <Outlet />}</main>
    </>
  );
}
