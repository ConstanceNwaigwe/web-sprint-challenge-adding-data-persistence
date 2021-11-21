// build your `Project` model here
const db = require('../../data/dbConfig');

function getAll() {
    return db('projects');
};

function create(project) {
    return db('projects')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
};

module.exports = {
    getAll,
    create
};
