const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');

const generateToken = (params = {}) => jwt.sign(params, "asdhasudasudh123nasb", {expiresIn: 86400,});

router.post('/register', async (req, res) => {
    const {email, username} = req.body;
    try{
        if(await User.findOne({ where: {username}}))
            return res.status(400).send({error: 'Username already exists'})

        if(await User.findOne({ where: {email}}))
            return res.status(400).send({error: 'Email already exists'});

        req.body.password = await bcrypt.hash(req.body.password, 10);

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user , token: generateToken({id: user.uuid})});
    } catch (err){
        return res.status(400).send({error: 'Registration failed'});
    }
});


router.post('/valid', auth, async (req, res) => {
    const user = await User.findOne({where: {uuid: req.userId}});
    user.password = null;
    return res.status(200).send(user);
});

router.post('/authenticate', async (req,res)=>{

    const {username, password} = req.body;
    const user = await User.findOne({where: {username}});

    if(!user)
        return res.status(400).send({error: 'User not found'});

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Invalid password'});
    
    user.password = undefined;

    res.send({user, token: generateToken({id: user.uuid})});

});

module.exports = app => app.use('/auth', router);