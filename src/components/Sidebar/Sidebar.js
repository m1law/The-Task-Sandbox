import "./Sidebar.css";
import TasksManager from "../../utils/Tasks/Tasks.js";
// import { useState } from "react";

export default function Sidebar({ color }) {
    const { taskList, addTask, deleteTask } = TasksManager();

    const tasks = taskList.map((task) => <li>{task.description}</li>);

    // console.log(taskManager);
    return (
        <div className="sidebar" style={{ backgroundColor: color }}>
            <h1>Here lies a list</h1>
            <button onClick={() => addTask("HI! HELLO!!!!!")}>
                click to make task
            </button>
            <button onClick={() => deleteTask(0)}>
                click to remove task (TESTING)
            </button>
            <ul>{tasks}</ul>
        </div>
    );
}
