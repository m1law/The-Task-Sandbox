import React from "react";
import { useDispatch } from "react-redux";
import { create, fetch, update, remove, getById } from "../actions/task.js";

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

    const handleUpdate = async () => {
        try {
            // Example: update task with id 1
            await dispatch(
                update(1, { description: "Updated Task Description" })
            );
            alert("Task updated!");
        } catch (e) {
            alert("Error updating task");
        }
    };

    const handleDelete = async () => {
        try {
            // Example: delete task with id 1
            await dispatch(remove(1));
            alert("Task deleted!");
        } catch (e) {
            alert("Error deleting task");
        }
    };

    const handleGetById = async () => {
        try {
            // Example: get task with id 1
            const task = await dispatch(getById(1));
            alert("Fetched task: " + JSON.stringify(task));
        } catch (e) {
            alert("Error fetching task");
        }
    };

    return (
        <div>
            <button onClick={handleCreate}>Create Task</button>
            <button onClick={handleFetch}>Fetch Tasks</button>
            <button onClick={handleUpdate}>Update Task</button>
            <button onClick={handleDelete}>Delete Task</button>
            <button onClick={handleGetById}>Get Task By ID</button>
        </div>
    );
};

export default TaskList;
