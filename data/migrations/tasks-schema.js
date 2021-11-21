exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('task_description')
          .notNullable();
        tbl.string('task_notes');
        tbl.boolean('task_completed').defaultTo(0);
        tbl.integer('project_id').unsigned().notNullable().references('project_id').inTable('projects');
      });
}


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tasks');
}