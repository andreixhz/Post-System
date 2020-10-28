const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

require('./src/app/controllers/index')(app);

app.listen(3333, () => console.log('serverStarted'));