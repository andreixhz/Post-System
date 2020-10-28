import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Api from '../../api';
import { useState } from 'react';

function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = event => {

        Api({
            method: 'post',
            url:'/auth/authenticate',
            data:{
                username, password
        }})
        .then(res => {
            localStorage.setItem("token", res.data.token);
        })
        .catch(() => alert("user not found"));
     
        event.preventDefault();
      };
    

    return(
        <div className="center-a enter">
            <div className="enter-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        label="Username"
                        id="outlined-size-small"
                        defaultValue=""
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        id="outlined-size-small"
                        defaultValue=""
                        type="password"
                        variant="outlined"
                        size="small"
                    />
                    <div>
                        <Button type="submit" variant="outlined">Confirm</Button>
                        <Link to="/register">Don't have account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;