import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookinClose, booking, date, setBookingSuccessful }) => {
    const { name, time, space } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);


    const handleOnBlurBooking = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newValueModal = { ...bookingInfo };
        newValueModal[field] = value;
        setBookingInfo(newValueModal);
        // console.log(field, value);
        // console.log(newValueModal);


    }

    const handelBooking = e => {
        // Collect data

        const appoinment = {
            ...bookingInfo,
            time,
            SeviceName: name,
            Date: date.toLocaleDateString()
        };

        // send to backend

        fetch('http://localhost:5000/appoinments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccessful(true)
                    handleBookinClose();
                }

            })


        e.preventDefault();

    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookinClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handelBooking}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-normal"
                            defaultValue={time}
                            variant="filled"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-normal"
                            name='patientName'
                            onBlur={handleOnBlurBooking}
                            defaultValue={user.displayName}
                            variant="filled"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-normal"
                            defaultValue={user.email}
                            name="email"
                            onBlur={handleOnBlurBooking}
                            variant="filled"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-normal"
                            defaultValue="Your Phone"
                            name="phone"
                            onBlur={handleOnBlurBooking}
                            variant="filled"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-normal"
                            defaultValue={date.toDateString()}
                            variant="filled"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;