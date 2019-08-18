exports.up = function(knex) {
  // creating a table for all shows. here I gave the shows a primary key that auto increments
  return Promise.all([
    //createTable is used to store data in the database
    knex.schema.createTable("shows", function(table) {
      table.increments("id").primary();
      table.string("title");
      table.string("date");
      table.string("tv_source");
      table.text("cover_image");
      //adding a timestamp to see when something was created and updated
      table.timestamps(true, true);
    }),

    knex.schema.createTable("characters", function(table) {
      // creating a table for all characters. here I gave the shows a primary key that auto increments
      table.increments("id").primary();
      table.string("char_name");
      table.string("ethnicity");
      table.string("name");
      table.integer("show_id").unsigned();
      table.foreign("show_id").references("shows.id");
      //adding a timestamp to see when something was created and updated
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    //used to remove a table definition and all the data, indexes, triggers, constraints and permission specifications for that table.
    knex.schema.dropTable("characters"),
    knex.schema.dropTable("shows")
  ]);
};
