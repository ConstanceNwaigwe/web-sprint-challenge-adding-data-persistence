// start your server here
const express = require('express');
const server = require('./api/server');

server.listen(5000, () => console.log('API running on port 5000'));
