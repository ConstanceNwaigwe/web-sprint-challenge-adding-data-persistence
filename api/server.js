// build your server here and require it from index.js
const express = require('express');
const server = express();
const projectRouter = require('../api/project/router');
const resourceRouter = require('../api/resource/router');
const taskRouter = require('../api/task/router');

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

/*server.use('*', (req,res) => {
    res.status(404).json({message: 'not found'})
});*/

module.exports = server;
