import React from "react";
import { ToDoCounter } from '../ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../ToDoSearch/ToDoSearch';
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton/CreateToDoButton';
import './App.css';

function AppUI({
    loading, 
    error,
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDo,
    deleteToDo,
}){
    return(
    <React.Fragment>
      <ToDoCounter
        completed={completedToDos}
        total={totalToDos}
      />
      <ToDoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <ToDoList>
        {error &&  <p>Holy Molly, there was an error</p>}
        {loading &&  <p>We are loading</p>}
        {(!loading && !searchedToDos.length) &&  <p>¡Create your first ToDo!</p>}
          {searchedToDos.map(todo => (
            <ToDoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completeToDo(todo.text)}
            onDelete = {() => deleteToDo(todo.text)}
            />
          ))}
      </ToDoList>

      {<CreateToDoButton/>}
    </React.Fragment>
    );
}

export {AppUI};