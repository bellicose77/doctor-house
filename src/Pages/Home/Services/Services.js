import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Flouried from '../../../images/fluoride.png'
import Cavity from '../../../images/cavity.png'
import Whiting from '../../../images/whitening.png'
import Service from '../Service/Service';

const services = [
    {
        name: 'flouried Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aliquid amet, est ex labore laudantium minus magnam provident, fuga molestiae, voluptate impedit possimus reiciendis ad. Delectus, voluptas magni. Quis, numquam',
        img: Flouried
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aliquid amet, est ex labore laudantium minus magnam provident, fuga molestiae, voluptate impedit possimus reiciendis ad. Delectus, voluptas magni. Quis, numquam',
        img: Cavity
    },
    {
        name: 'Teath Whiting ',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aliquid amet, est ex labore laudantium minus magnam provident, fuga molestiae, voluptate impedit possimus reiciendis ad. Delectus, voluptas magni. Quis, numquam',
        img: Whiting
    }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 400, color: 'success.main', m: 2 }} variant="h5" component="div">
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'medium', m: 4 }} component="div">
                    Services we Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;