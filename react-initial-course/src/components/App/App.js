import React  from 'react';
import {AppUI} from './AppUI';

const defaultToDos = [
  {text: 'Cook Dinner', completed: false},
  {text: 'React Course', completed: false},
  {text: 'Iron clothe', completed: false},
  {text: 'Play soccer', completed: false},
]

function App() {

  const localStorageToDos = localStorage.getItem('ToDos__v1');
  let parsedToDos;

  if(!localStorageToDos){
    localStorage.setItem('ToDos__v1',JSON.stringify([]));
    parsedToDos = [];
  } else{
    parsedToDos = JSON.parse(localStorageToDos);
  }

  const [toDos, setToDos] = React.useState(parsedToDos);
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

  const saveToDos = (newToDos) => {
    const stringifiedToDos = JSON.stringify(newToDos);
    localStorage.setItem('ToDos__v1', stringifiedToDos);
    setToDos(newToDos);
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
