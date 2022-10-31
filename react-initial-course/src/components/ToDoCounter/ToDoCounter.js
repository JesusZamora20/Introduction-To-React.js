import React from "react";
import { toDoContext } from "../ToDoContext/ToDoContext";
import './ToDoCounter.css';

function ToDoCounter(){
    const {totalToDos, completedToDos} = React.useContext(toDoContext);
    return(
        <h2 className="ToDoCounter">You have completed {completedToDos} out of {totalToDos} ToDo's</h2>
    );
}

export {ToDoCounter};