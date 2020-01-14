exports.up = function(knex) {
    return knex.schema.createTable('cities', function(t) {
      t.increments();
      t.string('city').notNullable();
      t.string('country').notNullable();
      t.string('activities').notNullable();
      t.specificType('places', 'text ARRAY');
    });
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('cities');
};  