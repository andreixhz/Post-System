const express = require('express');
const router = express.Router();
var path = require('path');

router.get('/:name', async (req, res) => {
    console.log(req.params.name);
    return res.sendFile(path.dirname(require.main.filename) +"/uploads/"+ req.params.name);
});

module.exports = app => app.use('/image', router);