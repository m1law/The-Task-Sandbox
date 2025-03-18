import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.js";
import "./components/Sidebar/Sidebar.css";
import Whiteboard from "./components/Whiteboard/Whiteboard";
import Tasks from "./components/Tasks/Tasks.js";

function App() {
    // const tasks = TasksManager();
    const tasks = Tasks();
    return (
        <div className="App">
            <Sidebar color="red" tasks={tasks}></Sidebar>
            {/* <header className="App-header">
                <h1>Testing Logo</h1>
            </header> */}
            <Whiteboard
                boardColor="grey"
                taskColor="red"
                tasks={tasks}
            ></Whiteboard>
            {/* <button
                onClick={(setTasks) =>
                    (setTasks = [
                        ...tasks,
                        {
                            id: 4,
                            description: "I am invincible!",
                            completed: true,
                        },
                    ])
                }
            >
                The invincible button
            </button>
            <button onClick={(tasks) => tasks}>check this out</button> */}
        </div>
    );
}

export default App;
