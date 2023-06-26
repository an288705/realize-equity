import * as React from "react";
// import { Theme } from '@mui/material/styles';
// import { SxProps } from '@mui/system';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

// const item: SxProps<Theme> = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   px: 5,
// };

// const number = {
//   fontSize: 24,
//   fontFamily: 'default',
//   color: 'secondary.main',
//   fontWeight: 'medium',
// };

// const image = {
//   height: 55,
//   my: 4,
// };

function ProductDescription() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "common.white", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          What is real estate crowdfunding?
        </Typography>
        <div>
          Real estate crowdfunding enables a group of investors to combine their
          funds and invest in larger real estate projects than would be
          accessible individually. Through a crowdfunding deal, you and other
          investors can buy a fraction of ownership in a property or real estate
          project, much like owning stocks in a corporation. The accumulated
          capital is then used to construct, renovate, or finance the property,
          with the goal of producing a return on investment for each investor.
        </div>
      </Container>
    </Box>
  );
}

export default ProductDescription;
