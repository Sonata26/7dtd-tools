import React from "react";
import { Typography, Box } from "@mui/material";

import LevelSlider from "components/LevelSlider/LevelSlider";

export default function XPCalculator() {
  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" textAlign="center">
          XP Calculator
        </Typography>
      </Box>
      <LevelSlider />
    </>
  );
}
