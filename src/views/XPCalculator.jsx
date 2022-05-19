import React from "react";
import { Typography, Box, Paper, colors } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import LevelSlider from "components/LevelSlider/LevelSlider";
import xpCalc from "util/xpCalc";
import defaultConfigs from "util/defaultConfigs";

function XPTable({ data }) {
  const columns = [
    { field: "id", hide: true },
    { field: "upgradeName", headerName: "Block / Upgrade Path", width: 200 },
    {
      field: "blocksRequired",
      headerName: "Blocks Required to Level up",
      type: "number",
      width: 200,
    },
    {
      field: "xp",
      headerName: "XP for a single block",
      type: "number",
      width: 200,
    },
  ];

  const rows = data.map((blockData, i) => ({
    ...blockData,
    id: blockData.upgradeName,
  }));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={10}
        // rowsPerPageOptions={[10]}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
}

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
  // React.useEffect(() => {
  //   console.log("xp calculator intialized");
  // }, []);

  // update required data
  React.useEffect(() => {
    if (levelRange) {
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
      {data?.xpRequired ? (
        <Typography variant="body1" sx={{ my: 3 }}>
          You need{" "}
          <Typography variant="string" color={colors.amber[300]}>
            {data.xpRequired}
          </Typography>{" "}
          <Typography variant="string" color={colors.amber[200]}>
            xp
          </Typography>{" "}
          to go from{" "}
          <Typography variant="string" color={colors.cyan[200]}>
            level
          </Typography>{" "}
          <Typography variant="string" color={colors.cyan[300]}>
            {levelRange[0]}
          </Typography>{" "}
          to{" "}
          <Typography variant="string" color={colors.cyan[400]}>
            {levelRange[1]}
          </Typography>{" "}
          . You can kill between{" "}
          <Typography variant="string" color={colors.red[500]}>
            {Math.ceil(data.zombiesReq * 0.75).toLocaleString()}
          </Typography>{" "}
          and{" "}
          <Typography variant="string" color={colors.red[500]}>
            {data.zombiesReq.toLocaleString()}
          </Typography>{" "}
          <Typography variant="string" color={colors.red[400]}>
            zombies
          </Typography>{" "}
          or refer to the block charts below. (Zombie charts and Quests TBA)
        </Typography>
      ) : (
        "Loading brains..."
      )}
      {data?.blocksReq && (
        <Paper sx={{ p: 1 }}>
          <b>Note:</b> paths listed are inclusive "Cobble to Concrete" includes
          upgrading a wood block to cobble. "Concrete Block" includes upgrading
          from a cobble to concrete.
        </Paper>
      )}
      <Box>
        {data?.blocksReq ? <XPTable data={data.blocksReq} /> : "standby..."}
      </Box>
    </>
  );
}
