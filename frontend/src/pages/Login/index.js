import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div className="center-a enter">
            <div className="enter-form">
                <h2>Login</h2>
                <form>
                    <TextField
                        label="Username"
                        id="outlined-size-small"
                        defaultValue=""
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
                        <Button variant="outlined">Confirm</Button>
                        <Link type="submit" to="/register">Don't have account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;