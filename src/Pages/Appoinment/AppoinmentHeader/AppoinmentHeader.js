import { Container } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';

const AppoinmentHeader = ({ date, setDate }) => {
    return (

        <Container >
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '100%' }} src={chair}></img>
                </Grid>
            </Grid>
        </Container >

    );
};

export default AppoinmentHeader;