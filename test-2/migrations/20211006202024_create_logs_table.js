
exports.up = function(knex) {
  return knex.schema
    .createTable('logs', function (table) {
       table.increments();
       table.string('endpoint').notNullable();
       table.string('params').notNullable();
       table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("logs");
};
