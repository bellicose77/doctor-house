import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import doct from '../../../images/login.png'

const Login = () => {
    const { lodingData, setLogingData } = useState({});
    const handleOnchange = e => {
        const field = e.target.name;
        const valu = e.target.value;
        const newlogingdata = { ...lodingData }
        newlogingdata[field] = newlogingdata;
        setLogingData(newlogingdata);
        console.log(field, valu);

    }
    const handleLoginSubmit = e => {
        alert("Successful form");
        e.preventDefault();

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
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
                        <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Sign In</Button>
                        <Link to="/register">
                            <Button variant="text">News user?Register here</Button>
                        </Link>

                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={doct}></img>
                </Grid>

            </Grid>
        </Container >

    );
};

export default Login;