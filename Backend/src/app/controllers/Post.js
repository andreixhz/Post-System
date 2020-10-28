const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

const uploadMiddleware = require('../middlewares/upload');
const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware);

router.post('/', uploadMiddleware.single('image'), async (req, res) => {

    const { filename, size } = req.file;

    const post = await Post.create({uuid: req.userId, image: filename, description: req.description});

    return res.status(200).json({ image: `/uploads/${filename}`, size, post})

});



module.exports = app => app.use('/post', router);