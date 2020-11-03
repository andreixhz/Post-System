import { Paper, ButtonBase, InputBase, Snackbar } from '@material-ui/core';
import React , { useEffect, useState } from 'react';
import api from '../../api';
import './style.css';
import upload from '../../assets/images/upload.svg';
import send from '../../assets/images/send.svg';

function UploadImage({socket}) {

    const [currentUploadImage, setCurrentUploadImage] = useState();
    const [file, setFile] = useState(null);
    const [description, setDecription] = useState();
    const [sendButton, setSendButton] = useState(false);

    const [sneakBar, setSneakBar] = React.useState({
        open: false,
        msg:''
    });
    

    function handleChangeImage(e){
        setFile(e.target.files[0])
        setCurrentUploadImage(URL.createObjectURL(e.target.files[0]));
    }

    function handleMakePost(){

        if(file === null || file === undefined ){
            setSneakBar({open:true, msg: 'Please select a image'});
            return;
        }

        const formData = new FormData();
        formData.append("image", file);
        formData.append("description", description);

        setSendButton(true);
        api({
            url:"/post",
            method:"post",
            data:formData,
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                "authorization": "bearer " + localStorage.getItem('token'),
            }
        }).then((res) => {
            console.log(res);
            setSendButton(false);
            setDecription("");
            setCurrentUploadImage(null);
            setFile(null);
            setSneakBar({open:true, msg: 'Image has been sended'});
            socket.emit("post", {res});
        })
    
    }

    return (
        <>
            <Paper className="post_image" elevation={1}>
                <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleChangeImage}
                />
                <label htmlFor="contained-button-file">
                    <ButtonBase disabled={sendButton} variant="contained" component="span">
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
                    value={description}
                    onChange={(e) => setDecription(e.target.value)}  
                />
                <ButtonBase disabled={sendButton} onClick={() => handleMakePost()}>
                    <div className="select_image">
                        <img src={send}/>
                    </div>
                </ButtonBase>
            </Paper>
            <Snackbar
                anchorOrigin={{ vertical:'top', horizontal: 'center' }}
                open={sneakBar.open}
                onClose={() => setSneakBar({ ...sneakBar, open: false })}
                message={sneakBar.msg}
                key={'top' + 'center'}
            />
        </>
    );
}



export default UploadImage;