import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { red } from "@mui/material/colors";

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              component={Link}
              to="/"
              color={red[600]}
              sx={{
                mr: 5,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".05rem",
                textDecoration: "none",
                display: { xs: "none", md: "block" },
              }}
            >
              <span style={{ color: red[500] }}>7 Days&nbsp;</span>to Die
              >&nbsp;
              <span style={{ color: red[500] }}>Tools</span>
            </Typography>

            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Button
                sx={{ my: 1, color: "white", display: "block" }}
                component={Link}
                to="/xp"
              >
                XP Calculator
              </Button>
              <Button
                sx={{ my: 1, color: "white", display: "block" }}
                component={Link}
                to="/perks"
                disabled
              >
                Perk Planner
              </Button>
              <Button
                sx={{ my: 1, color: "white", display: "block" }}
                component={Link}
                to="/builds"
                disabled
              >
                Building Planner
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
