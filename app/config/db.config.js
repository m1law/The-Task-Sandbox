export const HOST = "localhost";
export const USER = "postgres";
export const PASSWORD = "password";
export const DB = "the_task";
export const dialect = "postgres";
export const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};