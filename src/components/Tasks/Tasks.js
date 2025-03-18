import { useState } from "react";

function Tasks() {
    const [tasks, setTasks] = useState([
        { id: 0, description: "Hello world!", completed: false },
        { id: 1, description: "This is a very wonderful", completed: false },
        { id: 2, description: "i have a very powerful", completed: false },
    ]);

    return tasks;
}

export default Tasks;
// const addTask = (task) => {
//     setTaskList([
//         ...taskList,
//         {
//             id: taskList[taskList.length - 1].id + 1,
//             description: task,
//             completed: false,
//         },
//     ]);
// };

// const deleteTask = (taskID) => {
//     console.log("delete this task, ", taskList[taskID].description);
// };

// const deleteSpecificTask = (taskIndex) => {
//     console.log("delete this task, ", taskList[taskIndex].description);
// };

// const editTask = (taskID) => {
//     console.log(
//         "you are getting this task: ",
//         taskList[taskID].description
//     );
// };

// const getTask = (taskList, taskID) => {
//     return taskList[taskID].description;
// };
