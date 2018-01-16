const express = require('express');
const router = express.Router();

//Lay du lieu ninjas tu db
router.get('/ninjas', function(req,res){
    res.send({type:'GET'});
});

//Them DU LIEU NINJA VAO DB
router.post('/ninjas', function(req,res){
    console.log(req.body);
    res.send({
        type:'POST',
        name: req.body.name,
        ho: req.body.ho
    
    });
});

//UPDATE VAO DB NINJA
router.put('/ninjas/:id', function(req,res){
    res.send({type:'PUT'});
});

//DELETE NINJA FrOM DB
router.delete('/ninjas/:id', function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;