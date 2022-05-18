import React from "react";

import { Typography, Box, Slider, Grid, Input } from "@mui/material";

const defaultOptions = {
  minLevel: 1,
  maxLevel: 300,
  startingLevel: 1,
  startingDesiredLevel: 10,
  step: 1,
  minLevelIncrease: 1,
};

const normalizeLevelRange = (levelRange, options) => {
  const newRange = [...levelRange];

  if (levelRange[0] < options.minLevel) {
    newRange[0] = options.minLevel;
  } else if (levelRange[0] > options.maxLevel - options.minLevelIncrease) {
    newRange[0] = options.maxLevel - options.minLevelIncrease;
  }

  if (levelRange[1] > options.maxLevel) {
    newRange[1] = options.maxLevel;
  } else if (levelRange[1] < options.minLevel + options.minLevelIncrease) {
    newRange[1] = options.minLevel + options.minLevelIncrease;
  }

  if (newRange[0] > newRange[1]) {
    newRange[0] = newRange[1] - options.minLevelIncrease;
  }

  return newRange;
};

export default function LevelSlider(props) {
  const options = {
    ...defaultOptions,
    ...props.options,
  };
  const [levelRange, setLevelRange] = React.useState([
    options.startingLevel,
    options.startingDesiredLevel,
  ]);

  const handleSliderChange = (evt, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setLevelRange([
        Math.min(newValue[0], levelRange[1] - options.minLevelIncrease),
        levelRange[1],
      ]);
    } else {
      setLevelRange([
        levelRange[0],
        Math.max(newValue[1], levelRange[0] + options.minLevelIncrease),
      ]);
    }
  };

  const handleInputChange = (evt, levelIndex) => {
    if (levelIndex === 0) {
      setLevelRange(
        normalizeLevelRange([+evt.target.value, levelRange[1]], options)
      );
    } else if (levelIndex === 1) {
      setLevelRange(
        normalizeLevelRange([levelRange[0], +evt.target.value], options)
      );
    }
  };

  const handleBlur = () => {
    setLevelRange(normalizeLevelRange(levelRange, options));
  };

  return (
    <>
      <Box>
        <Typography id="input-slider">Level</Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent={"center"}
        >
          <Grid item xs={1}>
            <Input
              value={levelRange[0]}
              size="small"
              onChange={(evt) => {
                handleInputChange(evt, 0);
              }}
              onBlur={handleBlur}
              inputProps={{
                step: options.step,
                min: options.minLevel,
                max: options.maxLevel - 1,
                type: "number",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Slider
              defaultValue={1}
              step={options.step}
              min={options.minLevel}
              max={options.maxLevel}
              value={levelRange}
              onChange={handleSliderChange}
              marks
              valueLabelDisplay="on"
              disableSwap
              size="medium"
            />
          </Grid>
          <Grid item xs={1}>
            <Input
              value={levelRange[1]}
              size="small"
              onChange={(evt) => {
                handleInputChange(evt, 1);
              }}
              onBlur={handleBlur}
              inputProps={{
                step: options.step,
                min: options.minLevel + 1,
                max: options.maxLevel,
                type: "number",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
