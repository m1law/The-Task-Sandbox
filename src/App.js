import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.js";
import "./components/Sidebar/Sidebar.css";
// import TasksManager from "./utils/Tasks/Tasks.js";

function App() {
    // const tasks = TasksManager();
    return (
        <div className="App">
            <Sidebar color="red"></Sidebar>
            <header className="App-header"></header>
        </div>
    );
}

export default App;
