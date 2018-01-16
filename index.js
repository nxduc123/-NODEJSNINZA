const express = require('express');
//set up express app
const app = express();

app.get('/api', function(req,res){
    console.log('Get request');
    res.send({name:'ducnx'});
});

app.listen(process.env.port || 4000, function(){
        console.log('now listenning fo requests port 4000')
});