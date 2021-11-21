// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resources = require('./model');

router.get('/api/resources', (req,res) => {
    //
    Resources.getAll()
    .then(resource => {
        res.json(resource)
    })
    .catch(err => {
        res.status(500).json({message: "no resources found", error: err})
    })
});
router.post('/api/resources', (req,res) => {
    //
    const { resource_name } = req.body;
    if(!resource_name){
        res.status(404).json({
            message: "Please provide resource_name"
        })
    } else{
        Resources.create(req.body)
        .then(newres => {
            res.status(201).json(newres);
        })
        .catch(err => {
            res.status(500).json({
                message: "There was an error",
                err: err.message
            });
        })
    }
});

module.exports = router;
