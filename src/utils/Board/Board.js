import { useState } from "react";

function BoardManager() {
    const [modules, setModules] = useState([{}]);

    function addModule(taskID) {
        setModules([...modules, { id: taskID, x: 0, y: 0 }]);
    }
    // function initializeBoard(tasks) {
    //     for each id, desc in tasks:
    //     setModules([]);
    // }
}
