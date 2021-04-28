const env = require('dotenv');

// make path of file
let path = process.env.NODE_ENV !== 'test' ? '.env' : '.env.test';

// load variables
env.config({ path });

module.exports = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABSE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
};
