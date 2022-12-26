import React from "react";
import { Stack, Typography } from "@mui/material";

import Welcome from "./Welcome";
import LatestNews from "./LatestNews";


const Updates = () => {
  return (
    <Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-evenly"
        padding="30px"
      >
        <Welcome />
        <LatestNews />
      </Stack>
      <Stack alignItems="center" margin="10px">
        <Typography variant="h4" color="navy">
          Gallery
        </Typography>
        </Stack>
        </Stack>
  );
};

export default Updates;
