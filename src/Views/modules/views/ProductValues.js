import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <div>
      <Box
        component="section"
        sx={{ display: 'flex', justifyContent: 'center',overflow: 'hidden', bgcolor: 'secondary.light' }}
      >
        Investment Opportunities
      </Box>
      <Box
        component="section"
        sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
      >
        <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
          <Box
            component="img"
            src="/static/themes/onepirate/productCurvyLines.png"
            alt="curvy lines"
            sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
          />
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/static/themes/onepirate/productValues1.svg"
                  alt="suitcase"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" >
                  The Centra NYC
                </Typography>
                <Typography variant="h6" >
                  Location: New York NY
                </Typography>
                <Typography variant="h5">
                  {
                    'go for a mini-vacation just a few subway stops away from your home.'
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/static/themes/onepirate/productValues2.svg"
                  alt="graph"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" >
                  The Centra NYC
                </Typography>
                <Typography variant="h6" >
                  Location: New York NY
                </Typography>
                <Typography variant="h5">
                  {
                    'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
                  }

                  {'your Sundays will not be alike.'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/static/themes/onepirate/productValues3.svg"
                  alt="clock"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" >
                  The Centra NYC
                </Typography>
                <Typography variant="h6" >
                  Location: New York NY
                </Typography>
                <Typography variant="h5">
                  {'By registering, you will access specially negotiated rates '}
                  {'that you will not find anywhere else.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ProductValues;
