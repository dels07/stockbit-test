require('dotenv').config();

module.exports = {
  client: process.env.DB_TYPE,
  connection: {
    host : process.env.DB_HOST,
    port : +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: process.env.TABLE_MIGRATION,
  },
};
