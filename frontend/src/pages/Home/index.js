import React , { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import Post from '../../components/Post';
import UploadImage from '../../components/UploadImage';
import socketIOClient from "socket.io-client";
import Logout from '../../assets/images/exit.svg';

import './style.css';
import { ButtonBase } from '@material-ui/core';

const ENDPOINT = "https://post-system-api.herokuapp.com"

function Home() {

    const history = useHistory();
    const [user, setUser] = useState({});
    const [socket, setSocket] = useState();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            history.push('/login');
        }
        api({
            url:"/auth/valid",
            method:"post",
            headers:{
                authorization: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setUser(res.data);
        }).catch(() => {
            Loggout();
        });
        setSocket(socketIOClient(ENDPOINT));

    }, []);

    function Loggout(){
        localStorage.clear();
        history.push('/login');
    }

    return(
        <div className="center home">
            <div class="home-header">
                <h1>H1, {user.username}</h1>
                <ButtonBase onClick={() => Loggout()}>
                    <img src={Logout}/>
                </ButtonBase>
            </div>
            {
                socket != null ? <> <UploadImage socket={socket}/> <Post socket={socket}/> </>: <></>
            }
            
        </div>
    );
}

export default Home;