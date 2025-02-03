import { useSelector } from "react-redux";
import { AppBar } from "../AppBar/AppBar";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
