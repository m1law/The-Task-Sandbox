import Sidebar from "./Sidebar/Sidebar.js";
import "./Sidebar/Sidebar.css";
import Whiteboard from "./Whiteboard/Whiteboard.js";
import "./Whiteboard/Whiteboard.css";
import Tasks from "./Tasks/Tasks.js";

export default function Sandbox() {
    const tasks = Tasks();
    return (
        <div>
            <Sidebar color="red" tasks={tasks}></Sidebar>
            <Whiteboard
                boardColor="grey"
                taskColor="red"
                tasks={tasks}
            ></Whiteboard>
        </div>
    );
}
