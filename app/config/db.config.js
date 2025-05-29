import dotenv from "dotenv";
dotenv.config();

export const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
export const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_KEY;
export const HOST = "localhost";
export const PG_USER = process.env.PG_USER;
export const PG_PASSWORD = process.env.PG_PASSWORD;
export const PG_DATABASE = process.env.PG_DATABASE;
export const dialect = "postgres";
export const PORT = 3000;
export const pool = {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000,
};
