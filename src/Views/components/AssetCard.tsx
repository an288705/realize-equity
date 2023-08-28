import React from "react";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

export default function AssetCard(props: {
  title: string;
  location: string;
  description: string;
}) {
  return (
    <Grid item xs={12} md={4}>
      <Box sx={item}>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="h6">{props.location}</Typography>
        <Typography variant="h5">{props.description}</Typography>
      </Box>
    </Grid>
  );
}

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};
