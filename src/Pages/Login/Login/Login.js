import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import doct from '../../../images/login.png'

const Login = () => {
    const [logingData, setLogingData] = useState({});
    const { loginUser, user, isLoading, autherror } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newlogingdata = { ...logingData }
        newlogingdata[field] = value;
        setLogingData(newlogingdata);


    }
    const handleLoginSubmit = e => {
        loginUser(logingData.email, logingData.password, location, history)
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
                        {isLoading && <CircularProgress color="secondary" />}
                        {user?.email && <Alert severity="success">user create successfully</Alert>}
                        {autherror && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {autherror} <strong>check it out!</strong>
                        </Alert>}

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