import * as React from 'react';
// import { Theme } from '@mui/material/styles';
// import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

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

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Real Estate Results
        </Typography>
        <div>
          Insert table here
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
