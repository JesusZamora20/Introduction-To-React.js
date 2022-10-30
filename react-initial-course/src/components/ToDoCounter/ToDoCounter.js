import React from "react";
import './ToDoCounter.css';

function ToDoCounter({total, completed}){
    return(
        <h2 className="ToDoCounter">You have completed {completed} out of {total} ToDo's</h2>
    );
}

export {ToDoCounter};