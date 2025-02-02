import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
