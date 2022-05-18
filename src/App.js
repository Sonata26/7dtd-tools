import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
