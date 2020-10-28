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
           setPosts(res.data.data);
        })
    }, [])


    return (
        <div>{
            posts.map((item, i) => {
                console.log(item)
                PostCard({i,username: item.username});
            })
        }
        </div>
    );
}

function PostCard({i, username}){
    <Paper key={i} className="post_image" elevation={1}>
        <h3>{username}</h3>
    </Paper>
}

export default Post;