// import axios from "axios";
import supabase from "../services/supabaseClient.js";

// TODO don't hardcode server here
// const API_URL = "http://localhost:3000/api/task/";

async function create(description) {
    // const {error} = await supabase
    const { error, data } = await supabase.from("the_task").insert({
        description,
    });
    if (error) {
        return error;
    }
    return data;
}

async function fetch() {
    const { error, data } = await supabase.from("the_task").select();
    if (error) {
        return error;
    }
    return data;
}

async function update(id, updates) {
    const { error, data } = await supabase
        .from("the_task")
        .update(updates)
        .eq("id", id);
    if (error) {
        return error;
    }
    return data;
}

async function remove(id) {
    const { error, data } = await supabase
        .from("the_task")
        .delete()
        .eq("id", id);
    if (error) {
        return error;
    }
    return data;
}

async function getById(id) {
    const { error, data } = await supabase
        .from("the_task")
        .select()
        .eq("id", id)
        .single();
    if (error) {
        return error;
    }
    return data;
}

// const create = (description) => {
// console.log("we in task service rn");
// console.log(API_URL + "create");
// return axios.post(API_URL + "create", {
//   description,
// });
// };

export default {
    create,
    fetch,
    update,
    remove,
    getById,
};
