const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.post('/', async (req, res) => {

     
    
});


module.exports = app => app.use('/post', router);