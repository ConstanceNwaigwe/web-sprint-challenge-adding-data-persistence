// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAll() {
    return db('resources').select('*');
};

function create(resource) {
    return db('resources')
      .insert(resource)
      .then(ids => ({ resource_id: ids[0] }));
};

module.exports = {
    getAll,
    create
};
