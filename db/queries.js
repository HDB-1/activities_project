var knex = require('./knex.js');

function Cities() {
  return knex('cities');
}

// *** queries *** //

function getAll() {
  return Cities().select();
}

function getSingle(showID) {
  return Cities().where('id', parseInt(showID)).first();
}

function add(show) {
  return Cities().insert(show, 'id');
}

function update(showID, updates) {
  return Cities().where('id', parseInt(showID)).update(updates);
}

function deleteItem(showID) {
  return Cities().where('id', parseInt(showID)).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};