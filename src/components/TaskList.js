import React from "react";
import { useDispatch } from "react-redux";
import { create, fetch } from "../actions/task.js";

const TaskList = () => {
    const dispatch = useDispatch();

    const handleCreate = async () => {
        try {
            await dispatch(create("New Task Description"));
            alert("Task created!");
        } catch (e) {
            alert("Error creating task");
        }
    };

    const handleFetch = async () => {
        try {
            const tasks = await dispatch(fetch());
            console.log(tasks);
        } catch (e) {
            alert("Error fetching tasks");
        }
    };

    return (
        <div>
            <button onClick={handleCreate}>Create Task</button>
            <button onClick={handleFetch}>Fetch Tasks</button>
        </div>
    );
};

export default TaskList;
