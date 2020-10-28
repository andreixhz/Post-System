import React , { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { Container } from './styles';

function Home() {
    const history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem("token")){
            history.push('/login');
        } 
    }, [])  

    return <div />;
}

export default Home;