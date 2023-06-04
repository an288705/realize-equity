import React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';


export default function AssetCard() {
    return (
        <Grid item xs={12} md={4}>
            <Box sx={item}>
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
    );
}

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};
