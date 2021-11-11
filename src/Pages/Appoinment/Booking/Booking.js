import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal'

const Booking = ({ booking, date, setBookingSuccessful }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookinClose = () => setOpenBooking(false);
    return (


        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }} >
                    <Typography sx={{ color: 'info.main' }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space}
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINMENT</Button>

                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookinClose={handleBookinClose}
                setBookingSuccessful={setBookingSuccessful}
            ></BookingModal>
        </>

    );
};

export default Booking;