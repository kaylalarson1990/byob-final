exports.up = function(knex) {
    return Promise.all([
      knex.schema.createTable("shows", function(table) {
        table.increments("id").primary();
        table.string("title");
        table.string("date");
        table.string("tv_source");
        table.text("cover_image");
  
        table.timestamps(true, true);
      }),
  
      knex.schema.createTable("characters", function(table) {
        table.increments("id").primary();
        table.string("char_name");
        table.string("ethnicity");
        table.string("name");
        table.integer("show_id").unsigned();
        table.foreign("show_id").references("shows.id");
  
        table.timestamps(true, true);
      })
    ]);
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTable("characters"),
      knex.schema.dropTable("shows")
    ]);
  };
  