import React from "react";
import { toDoContext } from "../ToDoContext/ToDoContext";
import './ToDoSearch.css';

function ToDoSearch(){

    const {searchValue, setSearchValue} = React.useContext(toDoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
        className="ToDoSearch" 
        placeholder='Write your ToDo'
        value = {searchValue}
        onChange={onSearchValueChange}
        />
    );
}

export {ToDoSearch};