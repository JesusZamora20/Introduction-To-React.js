import React from "react";

function ToDoList(props){
    return(
        <section>
            {props.children}
        </section>
    );
}

export {ToDoList};