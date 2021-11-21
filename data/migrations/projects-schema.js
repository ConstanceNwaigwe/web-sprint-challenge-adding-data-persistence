exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name')
          .notNullable();
        tbl.string('project_description');
        tbl.boolean('project_completed').defaultTo(0);
      });
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};