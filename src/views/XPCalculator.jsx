import React from "react";
import { Typography, Box } from "@mui/material";

import LevelSlider from "components/LevelSlider/LevelSlider";
import xpCalc from "util/xpCalc";

import defaultConfigs from "util/defaultConfigs";

export default function XPCalculator() {
  const [levelRange, setLevelRange] = React.useState(null);
  const [xpRequired, setXpRequired] = React.useState(0);
  const [config, setConfig] = React.useState({
    levelOptions: defaultConfigs.levels,
  });

  // initial setup
  React.useEffect(() => {
    console.log("xp calculator intialized");
  }, []);

  React.useEffect(() => {
    if (levelRange) {
      setXpRequired(xpCalc.getXPRequired(...levelRange));
    }
  }, [levelRange, setXpRequired]);

  const onLevelSliderChange = (levelRange) => {
    setLevelRange(levelRange);
  };

  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" textAlign="center">
          XP Calculator
        </Typography>
      </Box>
      <LevelSlider
        callback={onLevelSliderChange}
        levelOptions={config.levelOptions}
      />
      <Box>
        <Typography>
          {levelRange ? xpCalc.howToLevel(...levelRange) : "loading"}
        </Typography>
      </Box>
    </>
  );
}
