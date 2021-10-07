import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

const config = {
  client: process.env.DB_TYPE,
  connection: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: process.env.TABLE_MIGRATION,
  },
};
const conn = knex(config);

const logTable = process.env.TABLE_LOGS;

export async function writeLog(endpoint, params) {
  try {
    if (!endpoint || !params) return;

    const result = await conn(logTable).insert({
      endpoint,
      params,
      created_at: Date.now(),
    });

    return result;
  } catch (err) {
    throw err;
  }
}
