import {
  DB,
  USER,
  PASSWORD,
  dialect as _dialect,
  pool as _pool,
} from "../config/db.config.js";
import userModel from "./user.model.js";
import roleModel from "./role.model.js";
import taskModel from "./task.model.js";

// TODO: this needs to pull from environment variables (process.env) instead of db.config.js for render.com
import Sequelize from "sequelize";
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: process.env.DB_URL,
  port: process.env.PG_PORT,
  dialect: _dialect,
  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// TODO: take out roles carefully since we don't need it. Start with frontend stuff and work to backend
db.user = userModel(sequelize, Sequelize);
db.role = roleModel(sequelize, Sequelize);
db.task = taskModel(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
});
db.user.hasMany(db.task);
db.task.belongsTo(db.user);

db.ROLES = ["user", "admin", "moderator"];

export default db;
