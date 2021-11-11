import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontrics',

        time: '8am - 9am',
        space: '10 spaces avaiable'

    },
    {
        id: 2,
        name: 'Cosmetric Destriy',

        time: '8am - 9am',
        space: '12 spaces avaiable'

    },
    {
        id: 3,
        name: 'Teeth Cleaning',

        time: '8am - 9am',
        space: '10 spaces avaiable'

    },
    {
        id: 4,
        name: 'Carvity Protection',

        time: '8am - 9am',
        space: '15 spaces avaiable'

    },
    {
        id: 5,
        name: 'Teeth Orthodontrics',

        time: '8am - 9am',
        space: '10 spaces avaiable'

    },
    {
        id: 6,
        name: 'Teeth Orthodontrics',

        time: '8am - 9am',
        space: '10 spaces avaiable'

    }
]

const AvaibleAppoinments = ({ date }) => {
    const [bookingSuccessful, setBookingSuccessful] = useState(false);
    return (
        <Container>
            <h2>This a lot of appoinment:{date.toDateString()}</h2>
            {bookingSuccessful && <Alert severity="success">user create successfully</Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking}
                        date={date}
                        setBookingSuccessful={setBookingSuccessful}
                    ></Booking>)
                }



            </Grid>
        </Container >
    );
};

export default AvaibleAppoinments;