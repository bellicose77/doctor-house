import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import doct from '../../../images/login.png'

const Register = () => {
    const [lodingData, setLogingData]
        = useState({});
    const { registerUser, isLoading } = useAuth();
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newlogingdata = { ...lodingData }
        newlogingdata[field] = value;
        setLogingData(newlogingdata);

    }
    const handleLoginSubmit = e => {
        if (lodingData.password !== lodingData.password2) {
            alert("Successful form");
            return
        }
        registerUser(lodingData.email, lodingData.password)

        e.preventDefault();

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {

                        !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your email"
                                onChange={handleOnchange}
                                name="email"
                                variant="standard"
                            />


                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleOnchange}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Confirm your password"
                                type="password"
                                name="password2"
                                onChange={handleOnchange}
                                variant="standard"
                            />
                            <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                            <Link to="/login">
                                <Button variant="text">Already register?Login here</Button>
                            </Link>

                        </form>
                    }
                    {isLoading && <CircularProgress color="secondary" />}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={doct}></img>
                </Grid>

            </Grid>
        </Container >

    );
};

export default Register;