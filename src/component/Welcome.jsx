import React from "react";
import { Stack, Typography, List } from "@mui/material";
import { color } from "@mui/system";

const Welcome = () => {
  return (
    <Stack justifyContent="center" padding="20px" direction="row">
      <List>
        <Typography variant="h3" color="navy">
          WELCOME TO ABV-IIITM
        </Typography>
        <Typography variant="subtitle1" maxWidth={538}>
          Atal Bihari Vajpayee-Indian Institute of Information Technology and
          Management (ABV-IIITM), Gwalior is an institute committed to taking
          academics to unprecedented levels of brilliance and efficiency. In
          this generation of excellence and specialization we aim at achieving
          an education standard that is comparable to the best globally.{" "}
        </Typography>
        <img
          src="https://www.iiitm.ac.in/images/2022/04/30/q4-overall-rank.png"
          height={{ xs: '250px', sm: '500px' }}
          width={{ xs: '250px', sm: '500px' }}
        />
      </List>
    </Stack>
  );
};

export default Welcome;
