import * as React from "react";
import Button from "../components/Button";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Enhance your portfolio with real estate
      </Typography>
      <Container sx={{ mt: 10, mb: 10, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src="" alt="suitcase" sx={{ height: 55 }} />
              <Typography variant="h6">The Centra NYC</Typography>
              <Typography variant="h6">Location: New York NY</Typography>
              <Typography variant="h5">
                {
                  "From the latest trendy boutique hotel to the iconic palace with XXL pool"
                }

                {
                  ", go for a mini-vacation just a few subway stops away from your home."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src="" alt="graph" sx={{ height: 55 }} />
              <Typography variant="h6">The Centra NYC</Typography>
              <Typography variant="h6">Location: New York NY</Typography>
              <Typography variant="h5">
                {
                  "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                }

                {"your Sundays will not be alike."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src="" alt="clock" sx={{ height: 55 }} />
              <Typography variant="h6">The Centra NYC</Typography>
              <Typography variant="h6">Location: New York NY</Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ProductHeroLayout>
  );
}
