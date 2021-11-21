// build your `Task` model here
const db = require('../../data/dbConfig');


function getAll() {
    return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
    .where('p.project_id', 't.project_id');
};

function create(task) {
    return db('tasks')
      .insert(task)
      .then(ids => ({ task_id: ids[0] }));
};

module.exports = {
    getAll,
    create
};
