import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className="center-a enter">
            <div className="enter-form">
                <h2>Register</h2>
                <form>
                    <TextField
                        label="Username"
                        id="outlined-size-small"
                        defaultValue=""
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        label="Email"
                        id="outlined-size-small"
                        defaultValue=""
                        type="email"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        label="Password"
                        id="outlined-size-small"
                        defaultValue=""
                        type="password"
                        variant="outlined"
                        size="small"
                    />
                    <div>
                        <Button type="submit" variant="outlined">Confirm</Button>
                        <Link to="/login">have account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;