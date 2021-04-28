const env = require('dotenv');

if (process.env.NODE_ENV !== 'test') {
  env.config({ path: '.env.test' });
} else {
  env.config();
}

module.exports = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABSE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
  ssl: true,
};
