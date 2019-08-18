exports.up = function(knex) {
  return Promise.all([
    knex.schema.table("shows", table => table.string("characters"))
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table("shows", table => table.dropColumn("characters"))
  ]);
};
