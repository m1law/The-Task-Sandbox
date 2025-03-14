import { useState } from "react";

// class TasksManager {
//     constructor(props) {
//         this.taskList = [
//             // { id: 1, description: "Please work." },
//             // { id: 2, description: "Pretty please?" },
//             "please work.",
//             "Pretty Please?",
//             "I beg of you!",
//         ];
//     }

//     CreateTask({ task }) {
//         // this.taskList.push({ id: this.taskList.length, description: task });
//         this.taskList.push(task);
//         // console.log(task);
//         // console.log(this.taskList);
//     }

//     GetTasks() {
//         return this.taskList;
//     }
// }

function TasksManager() {
    const [taskList, setTaskList] = useState([
        "Hello world!",
        "This is a very wonderful",
    ]);

    const addTask = (task) => {
        setTaskList([...taskList, task]);
    };

    return { taskList, addTask };
}

export default TasksManager;
