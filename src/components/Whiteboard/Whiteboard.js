import "./Whiteboard.css";
// import Tasks from "../Tasks/Tasks";

export default function Whiteboard({ boardColor, taskColor, tasks }) {
    // const { taskList, getTask } = tasks;
    // const tasks = Tasks();
    // taskList.getTask(taskList, 1);

    const modules = tasks.map((task) => (
        <div key={task.id} className="taskModules" style={{ color: taskColor }}>
            {task.description}
        </div>
    ));

    return (
        <div style={{ backgroundColor: boardColor }}>
            <button onClick={() => console.log(tasks)}>Testing button</button>
            <div>{modules}</div>
        </div>
    );
}
