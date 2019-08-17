exports.up = function(knex) {
    return knex.schema.table('characters', function(table) {
      table.string('show_name');
    })  
  };
  
  exports.down = function(knex) {
    return knex.schema.table('characters', function(table) {
      table.dropColumn('show_name');
    })
  };
