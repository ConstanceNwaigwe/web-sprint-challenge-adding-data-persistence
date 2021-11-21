exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.string('resource_name')
          .notNullable().unique();
        tbl.string('resource_description');
      });
}


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('resources');
}