import React, { useEffect } from "react";
import { Typography, Box, Slider, Grid, Input } from "@mui/material";

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

  if (newRange[0] >= newRange[1]) {
    newRange[0] = newRange[1] - options.minLevelIncrease;
  }

  return newRange;
};

export default function LevelSlider({ levelOptions, callback = () => {} }) {
  const [levelRange, setLevelRange] = React.useState([
    levelOptions.startingLevel,
    levelOptions.startingDesiredLevel,
  ]);

  // setup hook
  useEffect(() => {
    callback(levelRange);
  }, []);

  // send level range upstream
  // useEffect(() => {
  //   if (callback) {
  //     callback(debouncedLevelRange);
  //   }
  // }, [debouncedLevelRange, callback]);

  const onSliderCommited = () => {
    callback(levelRange);
  };

  const handleSliderChange = (evt, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setLevelRange(
        normalizeLevelRange([newValue[0], levelRange[1]], levelOptions)
      );
    } else {
      setLevelRange(
        normalizeLevelRange([levelRange[0], newValue[1]], levelOptions)
      );
    }
  };

  const handleInputChange = (evt, levelIndex) => {
    const nextLevelRange =
      levelIndex === 0
        ? normalizeLevelRange([+evt.target.value, levelRange[1]], levelOptions)
        : normalizeLevelRange([levelRange[0], +evt.target.value], levelOptions);

    setLevelRange(nextLevelRange);
    callback(nextLevelRange);
  };

  const handleBlur = () => {
    setLevelRange(normalizeLevelRange(levelRange, levelOptions));
  };

  return (
    <>
      <Box>
        <Typography id="input-slider" textAlign="center">
          Level
        </Typography>
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
                step: levelOptions.step,
                min: levelOptions.minLevel,
                max: levelOptions.maxLevel - 1,
                type: "number",
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Slider
              defaultValue={1}
              step={levelOptions.step}
              min={levelOptions.minLevel}
              max={levelOptions.maxLevel}
              value={levelRange}
              onChange={handleSliderChange}
              onChangeCommitted={onSliderCommited}
              marks
              valueLabelDisplay="on"
              disableSwap
              // size="medium"
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
                step: levelOptions.step,
                min: levelOptions.minLevel + 1,
                max: levelOptions.maxLevel,
                type: "number",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
