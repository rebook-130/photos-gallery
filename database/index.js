/* eslint-disable no-console */
const { Client } = require('pg');

const connectionStr = 'postgres://anna@localhost:5432/gallery';

const client = new Client({
  connectionString: connectionStr,
});
client.connect();

module.exports = client;
