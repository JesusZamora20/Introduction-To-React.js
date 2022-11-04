import React from "react";
import { toDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoForm.css";

function ToDoForm(){

    const [newToDoValue, setNewToDoValue] = React.useState('');
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(toDoContext);

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Write your new ToDo</label>
            <textarea 
                value={newToDoValue}
                onChange={onChange}
                placeholder="Write your new ToDo"
            />

            <div  className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancel</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Add</button>
            </div>
        </form>
    );
}

export {ToDoForm};