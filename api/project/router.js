// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('../project/model');

router.get('/api/projects', (req,res) => {
    //
    Projects.getAll()
    .then(project => {
        res.json(project)
    })
    .catch(err => {
        res.status(500).json({message: "no projects found", error: err})
    })
});
router.post('/api/projects', (req,res) => {
    //
    const { project_name } = req.body;
    if(!project_name){
        res.status(404).json({
            message: "Please provide project_name"
        })
    } else{
        Projects.create(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
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
