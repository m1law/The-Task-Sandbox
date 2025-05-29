import { createClient } from "@supabase/supabase-js";
// import dotenv from "dotenv";
// dotenv.config();

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl) {
    throw new Error("Supabase URL missing!");
}

if (!supabaseKey) {
    throw new Error("Supabase Key missing!");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
