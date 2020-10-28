import React , { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../api';
// import { Container } from './styles';

function Home() {
    const history = useHistory();

    const [user, setUser] = useState();

    useEffect(async () => {
        if(!localStorage.getItem("token")){
            history.push('/login');
        }

        await api({
            url:"/auth/token",
            method:"post",
            data: localStorage.getItem("token")
        }).then(res => {
            setUser(res.data);
        })

    }, [])  

    return <div />;
}

export default Home;