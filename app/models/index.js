import {
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    HOST,
    PG_DATABASE,
    PG_USER,
    PG_PASSWORD,
    dialect as _dialect,
    pool as _pool,
} from "../config/db.config.js";
import userModel from "./user.model.js";
import taskModel from "./task.model.js";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// const { data, error } = await supabase.from("the_task").select();
// console.log("Data:", data);
// console.log("Error:", error);
// const { error2 } = await supabase
//     .from("the_task")
//     .insert({ description: "hello world!" });
// console.log("Error:", error2);

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.user = userModel(sequelize, Sequelize);
// db.task = taskModel(sequelize, Sequelize);

// db.user.belongsToMany(db.role, {
//     through: "user_roles",
// });
// db.user.hasMany(db.task);
// db.task.belongsTo(db.user);

export default supabase;
