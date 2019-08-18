exports.up = function(knex) {
  return Promise.all([
    // needed to link the characters in my data set (coming in as an array of objects)
    knex.schema.table("shows", table => table.string("characters"))
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table("shows", table => table.dropColumn("characters"))
  ]);
};
