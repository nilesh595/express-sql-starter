const knexfile = require("./knexfile");

const db = require("knex").knex(knexfile.development);

module.exports = db;
