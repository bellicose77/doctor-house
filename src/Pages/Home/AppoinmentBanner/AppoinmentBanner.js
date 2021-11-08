import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { fontSize } from '@mui/system';

const appoinmentbg = {
    background: `url(${bg})`,
    backgroundColor: 'rgb(45,58,74,.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 200
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentbg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <img src={doctor} style={{ width: 400, marginTop: -125 }} alt="some"></img>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    textAlign: 'left',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>

                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }}  >
                            Appoinment
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 5 }} style={{ color: 'white', }} >
                            Make an appoinment today
                        </Typography>
                        <Typography variant="h6" style={{ color: 'white', fontSize: 14 }} sx={{ my: 5 }} >
                            Lorem kjdsfhkjds lore sdfj kljdjkf lsdfjk ldjiuh
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box >
    );
};

export default AppoinmentBanner;