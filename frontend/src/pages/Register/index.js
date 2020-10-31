import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import Api from '../../api';
import {useState} from 'react';

function Register() {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const handleSubmit = event => {

        Api({
            method: 'post',
            url:'/auth/register',
            data:{
                username, email, password
            }
        })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            history.push('/');
        })
        .catch(() => alert("register error"));
     
        event.preventDefault();
      };
    

    return(
        <div className="center-a enter">
            <div className="enter-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        id="outlined-size-small"
                        defaultValue=""
                        variant="outlined"
                        size="small"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        id="outlined-size-small"
                        defaultValue=""
                        type="email"
                        variant="outlined"
                        size="small"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        id="outlined-size-small"
                        defaultValue=""
                        type="password"
                        variant="outlined"
                        size="small"
                        onChange={(e) => setPassword(e.target.value)}
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