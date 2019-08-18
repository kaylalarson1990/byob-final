exports.up = function(knex) {
  //here I am adding a new schema because I wanted to link each character to a show easier than id
    return knex.schema.table('characters', function(table) {
      table.string('show_name');
    })  
  };
  
  exports.down = function(knex) {
    return knex.schema.table('characters', function(table) {
      table.dropColumn('show_name');
    })
  };
