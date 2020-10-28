const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

const uploadMiddleware = require('../middlewares/upload');
const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware);

router.post('/', uploadMiddleware.single('image'), async (req, res) => {

    const { filename, size } = req.file;
    const post = await Post.create({uuid: req.userId, image: filename, description: req.body.description});

    return res.status(200).json({ image: `/uploads/${filename}`, size, post})

});

router.get('/', async(req, res) => {

    const { page = 1 } = req.query;
    const count = await Post.count();

    if(count === undefined || count === 0) return res.status(200).send({status:200,code:'no post founded'});

    const posts = await Post.findAll({
        offset: (page - 1) * 10,
        limit: 10
    });

    res.header('X-Total-Count', count);
    console.log(count)
    return res.status(200).send({status:200,code:'posts_getted', data:posts});

});

module.exports = app => app.use('/post', router);