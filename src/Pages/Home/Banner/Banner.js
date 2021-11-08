import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
    background: `url(${bg})`
};
const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid style={{ textAlign: 'left' }} container spacing={2}>
                <Grid style={verticalAlign} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{ mb: 5 }}  >
                            Your Smile <br />
                            Here

                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14, color: 'grey', fontWeight: 400, mb: 5 }}  >
                            Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source

                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>GET APPOINMENT</Button>
                    </Box>
                </Grid>
                <Grid style={verticalAlign} item xs={12} md={6}>
                    <img style={{ width: '400px' }} src={chair}>

                    </img>
                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;