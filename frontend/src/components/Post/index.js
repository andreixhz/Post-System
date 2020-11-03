import { Paper } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import api from '../../api';

import './style.css';

function Post({socket}) {

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

    useEffect(() => {
        socket.on("post", (data) => {

            setPosts([...posts, data.res.data.post]);

        })
    });

    return (
        <div>
            {
                posts.length === 10 ? posts.map((item, i) => {
                    return PostCard({i,author: item.author, url: item.image, desc: item.description });
                }) : posts.slice(0).reverse(0).map((item, i) => {
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