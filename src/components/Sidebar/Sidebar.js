import "./Sidebar.css";
import TasksManager from "../../utils/Tasks/Tasks.js";
import { useState } from "react";

export default function Sidebar({ color }) {
    // let taskManager = new TasksManager();
    // const [isUpdated, setIsUpdated] = useState(false);
    // const [list, setList] = useState(taskManager.taskList);

    // function handleNewTask(task) {
    //     // setIsUpdated(true);
    //     taskManager.CreateTask(task);
    //     setList([...taskManager.taskList, task]);
    //     // setExList(
    //     //     (exList =
    //     //         exList + { id: exList.length, description: "Find the goober." })
    //     // );
    // }
    const { taskList, addTask } = TasksManager();

    const final = taskList.map((task) => <li>{task}</li>);

    // console.log(taskManager);
    return (
        <div className="sidebar" style={{ backgroundColor: color }}>
            <h1>Here lies a list</h1>
            <ul>{final}</ul>

            <button onClick={() => addTask("HI! HELLO!!!!!")}>
                click to make task
            </button>
        </div>
    );
}
