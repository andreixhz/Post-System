import { Paper, ButtonBase, InputBase } from '@material-ui/core';
import React , { useEffect, useState } from 'react';
import api from '../../api';
import './style.css';
import upload from '../../assets/images/upload.svg';
import send from '../../assets/images/send.svg';

function UploadImage() {

    const [currentUploadImage, setCurrentUploadImage] = useState();
    const [description, setDecription] = useState();

    function HandleChangeImage(e){
        const file = URL.createObjectURL(e.target.files[0]);
        setCurrentUploadImage(file);
    }

    function handleChangeDescription(e){
        
    }


    return (
        <Paper className="post_image" elevation={1}>
            <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={HandleChangeImage}
            />
            <label htmlFor="contained-button-file">
                <ButtonBase variant="contained" component="span">
                    <div style={{backgroundImage: `url(${currentUploadImage})`, backgroundSize: 'cover'} } className="select_image">
                        <img src={upload}/>
                    </div>
                </ButtonBase>
            </label>
            <InputBase
                multiline
                rowsMax={3}
                inputProps={{ 'aria-label': 'naked' }}
                placeholder="Decription"
                className="description"
                onChange={(e) => setDecription(e.target.value)}  
            />
            <ButtonBase>
                <div className="select_image">
                    <img src={send}/>
                </div>
            </ButtonBase>
        </Paper>
    );
}

export default UploadImage;