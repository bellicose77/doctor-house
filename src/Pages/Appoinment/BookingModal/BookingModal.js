import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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

const BookingModal = ({ openBooking, handleBookinClose, booking, date }) => {
    const { name, time, space } = booking;

    const handelBooking = e => {
        alert("submitting");
        handleBookinClose();
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
                            defaultValue="Your name"
                            variant="filled"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-normal"
                            defaultValue="Your Email"
                            variant="filled"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-normal"
                            defaultValue="Your Phone"
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