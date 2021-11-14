import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Calendar
                    date={date}
                    setDate={setDate}
                ></Calendar>
            </Grid>
            <Grid item xs={4}>
                <Appointments date={date}></Appointments>
            </Grid>

        </Grid>
    );
};

export default DashboardHome;