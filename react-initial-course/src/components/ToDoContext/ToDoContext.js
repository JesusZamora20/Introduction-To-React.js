import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const toDoContext = React.createContext();

function ToDoProvider(props){

    const {item:toDos, saveItem:saveToDos, loading, error} =useLocalStorage('ToDos__v1',[]);

    const [searchValue, setSearchValue] = React.useState('');
    const completedToDos = toDos.filter(todo =>  !!todo.completed).length;
    const totalToDos = toDos.length;
    const [openModal, setOpenModal] = React.useState(false);

  // ;Looking for toDos in the search bar
    let searchedToDos = [];

    if(!searchValue.length >= 1){
    searchedToDos = toDos;
    }else{
    searchedToDos = toDos.filter(todo => {
    const toDoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText);
    });
    }

  // Completing ToDos

    const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
}
  // Add ToDos

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      completed : false,
      text,  
    });
    saveToDos(newToDos);
  }

  // Deleting ToDos

    const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex,1);
    saveToDos(newToDos);
    }
    return(
        <toDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue ,
            setSearchValue,
            searchedToDos ,
            completeToDo,
            addToDo,
            deleteToDo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </toDoContext.Provider>
    );
}

export {toDoContext, ToDoProvider};