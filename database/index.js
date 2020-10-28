/* eslint-disable no-console */
const { Client } = require('pg');
const { CONNECTION_STRING } = require('./config.js');

const client = new Client({
  connectionString: CONNECTION_STRING,
});
client.connect();

module.exports = client;
