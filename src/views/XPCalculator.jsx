import React from "react";
import { Typography, Box } from "@mui/material";

import LevelSlider from "components/LevelSlider/LevelSlider";
import xpCalc from "util/xpCalc";

import defaultConfigs from "util/defaultConfigs";

export default function XPCalculator() {
  // load config TODO: configurator side panel
  const [config, setConfig] = React.useState({
    levels: defaultConfigs.levels,
    gameOptions: defaultConfigs.gameOptions,
    materials: defaultConfigs.materials,
    zombies: defaultConfigs.zombies,
  });
  // level range from slider
  const [levelRange, setLevelRange] = React.useState(null);
  // data for charts
  const [data, setData] = React.useState(null);

  // initial setup
  React.useEffect(() => {
    console.log("xp calculator intialized");
  }, []);

  // update required data
  React.useEffect(() => {
    if (levelRange) {
      const xpReq = xpCalc.getXPRequired(levelRange);
      const data = xpCalc.getAllData(levelRange, config);

      setData(data);
    }
  }, [levelRange, setData]);

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
        levelOptions={config.levels}
      />
      <Box>
        <Typography>
          {/* {levelRange ? xpCalc.howToLevel(...levelRange) : "loading"} */}
          {data ? JSON.stringify(data, null, 2) : "standby"}
        </Typography>
      </Box>
    </>
  );
}
