import { Paper } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import api from '../../api';

import './style.css';

function Post() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api({
            url:"/post",
            method:"get",
            headers: {
                "authorization": "bearer " + localStorage.getItem('token'),
            }
        }).then((res) => {  
            if(res.data.code !== "no post founded"){
                setPosts(res.data.data);
            }
        })
    }, [])

    return (
        <div>
            {
                posts.map((item, i) => {
                    return PostCard({i,author: item.author, url: item.image, desc: item.description });
                })
            }
        </div>
    );
}

function PostCard({i, author, url, desc}){
    return(
        <Paper key={i} className="post" elevation={1}>
            <h4>{author}</h4>
            {desc === 'undefined' ? <></> : <p>{desc}</p>}
            <img src={`http://localhost:3333/image/${url}`}/>
            <div></div>
        </Paper>
    )
}

export default Post;