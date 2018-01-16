const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//Lay du lieu ninjas tu db
router.get('/ninjas', function(req, res, next){
    res.send({type:'GET'});
});

//Them DU LIEU NINJA VAO DB
router.post('/ninjas', function(req, res, next){
   Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
   }).catch(next);
});

//UPDATE VAO DB NINJA
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
});

//DELETE NINJA FrOM DB
router.delete('/ninjas/:id', function(req,res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
    
});

module.exports = router;