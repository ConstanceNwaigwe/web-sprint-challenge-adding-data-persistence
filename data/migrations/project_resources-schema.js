exports.up = function(knex, Promise) {
    return knex.schema.createTable('project_resources', tbl => {
        tbl.integer('resource_id')
          .notNullable().unsigned().references('resource_id').inTable('resources');
        tbl.integer('project_id')
          .notNullable().unsigned().references('project_id').inTable('projects');
        tbl.primary(['resource_id', 'project_id']);
      });
}


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project_resources');
}