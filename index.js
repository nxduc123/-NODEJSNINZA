const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = requise('mongoose');

//set up express app
const app = express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);

app.listen(process.env.port || 4000, function(){
        console.log('now listenning fo requests port 4000')
});