// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model');

router.get('/api/tasks', (req,res) => {
    //
    Tasks.getAll()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({message: "no tasks found", error: err})
    })
});
router.post('/api/tasks', (req,res) => {
    //
    const { task_description, project_id } = req.body;
    if(!task_description || !project_id){
        res.status(404).json({
            message: "Please provide task_description and project_id"
        })
    } else{
        Tasks.create(req.body)
        .then(newtask => {
            res.status(201).json(newtask);
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
