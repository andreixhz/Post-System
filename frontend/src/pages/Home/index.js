import React , { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import UploadImage from '../../components/UploadImage';
import './style.css';

function Home() {

    const history = useHistory();
    const [user, setUser] = useState({});
    
    useEffect(async () => {
        if(!localStorage.getItem("token")){
            history.push('/login');
        }
        await api({
            url:"/auth/valid",
            method:"post",
            headers:{
                authorization: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setUser(res.data);
        });
        
    }, []);

    return(
        <div className="center home">
            <h1>H1, {user.username}</h1>
            <UploadImage />
        </div>
    );
}

export default Home;