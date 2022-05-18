import { Outlet } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bf1f1f",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Navbar />
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
