import { useState } from "react";

function BoardManager() {
    const [moduleList, setModules] = useState([{}]);

    function addModule(taskID) {
        setModules([...moduleList, { id: taskID, x: 0, y: 0 }]);
    }
    // function initializeBoard(tasks) {
    //     for each id, desc in tasks:
    //     setModules([]);
    // }

    return { moduleList, setModules };
}

export default BoardManager;
