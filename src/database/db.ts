const { Pool } = require('pg');
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.PORT)
const pool = new Pool({
  user: process.env.USER_NAME,
  password: process.env.USER_PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT, // default Postgres port
  database: process.env.DATABASE_NAME
});

module.exports = {
  query: (text: any, params: any) => pool.query(text, params)
};