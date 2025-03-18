import { Pool } from 'pg';
require("dotenv").config();

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
});

export function query(text, params) { return pool.query(text, params); }