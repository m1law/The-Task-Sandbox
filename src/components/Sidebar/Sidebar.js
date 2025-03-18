import "./Sidebar.css";
import Tasks from "../Tasks/Tasks";
// import { useState } from "react";

export default function Sidebar({ color, tasks }) {
    // const { taskList, addTask, deleteTask } = Tasks();
    // const tasks = Tasks();

    const taskList = tasks.map((task) => (
        <li key={task.id}>{task.description}</li>
    ));

    // console.log(taskManager);
    return (
        <div className="sidebar" style={{ backgroundColor: color }}>
            <h1>Here lies a list</h1>
            {/* <button onClick={() => addTask("HI! HELLO!!!!!")}>
                click to make task
            </button>
            <button onClick={() => deleteTask(0)}>
                click to remove task (TESTING)
            </button> */}
            <ul>{taskList}</ul>
        </div>
    );
}
