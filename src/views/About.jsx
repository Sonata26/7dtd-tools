import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function About() {
  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" component="h1">
          7 Days to Die Tools - About
        </Typography>
        <Typography variant="body1">
          This is just a few work in progress tools for Alpha 20 and above. Use
          the Navbar to choose a tool or checkout the recommended guides below.
        </Typography>
      </Box>

      <Card sx={{ minWidth: 275, maxWidth: 600 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Best 7 Days to Die Guide
          </Typography>
          <Typography variant="h5" component="div">
            Adventurer's Guide to the Wasteland
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            by Sonata
          </Typography>
          <Typography variant="body2">
            A complete guide to questing, playing as a nomad, and more.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=2806831323"
            target="_blank"
            color="secondary"
          >
            Go to the Guide
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
