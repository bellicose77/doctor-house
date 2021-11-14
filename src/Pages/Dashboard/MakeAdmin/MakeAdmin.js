import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handelOnBlur = e => {

        setEmail(e.target.value);

    }
    const handelAdmin = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    console.log(data)

                }


            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handelAdmin}>

                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    variant="standard"
                    onBlur={handelOnBlur}
                />
                <Button type="submit" variant="contained">MakeAdmin</Button>
            </form>
            {success && <Alert severity="success">Made admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;