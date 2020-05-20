// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// module.exports = knex(knexConfig.development);

const knex = require('knex');

const config = require('../knexfile.js');
const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment]);