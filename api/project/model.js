// build your `Project` model here
const db = require('../../data/dbConfig');

function getAll() {
    return db('projects').select('*');
};

function create(project) {
    return db('projects')
      .insert(project)
      .then(ids => ({ project_id: ids[0] }));
};

module.exports = {
    getAll,
    create
};
