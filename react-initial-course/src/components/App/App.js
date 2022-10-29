import React  from 'react';
import {AppUI} from './AppUI';

// const defaultToDos = [
//   {text: 'Cook Dinner', completed: false},
//   {text: 'React Course', completed: false},
//   {text: 'Iron clothe', completed: false},
//   {text: 'Play soccer', completed: false},
// ]

function useLocalStorage(itemName, initialValue){
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else{
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem('itemName', stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    saveItem,
  ]
}

function App() {
  const [toDos, saveToDos] =useLocalStorage('ToDos__v1',[]);
  
  const [searchValue, setSearchValue] = React.useState('');
  const completedToDos = toDos.filter(todo =>  !!todo.completed).length;
  const totalToDos = toDos.length;

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

  // Deleting ToDos

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex,1);
    saveToDos(newToDos);
  }

  return(
    <AppUI 
    completedToDos={completedToDos}
    totalToDos={totalToDos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedToDos = {searchedToDos}
    completeToDo = {completeToDo}
    deleteToDo = {deleteToDo}
    />
    );
}

export default App;
