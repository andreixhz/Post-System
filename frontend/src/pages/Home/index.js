import React , { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import Post from '../../components/Post';
import UploadImage from '../../components/UploadImage';
import './style.css';

function Home() {

    const history = useHistory();
    const [user, setUser] = useState({});

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
            localStorage.clear();
            history.push('/login');
        });
        
    }, []);

    return(
        <div className="center home">
            <h1>H1, {user.username}</h1>
            <UploadImage/>
            <Post/>
        </div>
    );
}

export default Home;