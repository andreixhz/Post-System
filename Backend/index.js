const express = require('express');
const app = express();
const cors = require('cors');

const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.json());
app.use(cors());

io.on('connection', (socket) => {

    socket.on('post', async (data) => io.emit('post', data));

});

require('./src/app/controllers/index')(app);

http.listen(3333, () => console.log('serverStarted'));