
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable("dogs", column => {
      column.increments();
      column.string("name", 100).notNullable().unique();
      column.string("breed", 100)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists("dogs")
};
