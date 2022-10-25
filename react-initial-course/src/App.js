import React  from 'react';
// import logo from './logo.svg';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import './App.css';

const defaultToDos = [
  {text: 'Cook Dinner', completed: false},
  {text: 'React Course', completed: false},
  {text: 'Iron clothe', completed: false},
  {text: 'Play soccer', completed: false},
]

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
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
    setToDos(newToDos);
  }

  // Deleting ToDos

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(todo => todo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex,1);
    setToDos(newToDos);
  }

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

export default App;
