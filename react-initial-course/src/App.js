import React  from 'react';
// import logo from './logo.svg';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import './App.css';

const defaultToDos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Curso React', completed: false},
  {text: 'Planchar Ropa', completed: false},
  {text: 'Jugar futbol', completed: false},
]

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedToDos = toDos.filter(todo =>  !!todo.completed).length;
  const totalToDos = toDos.length;

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
            completed={todo.completed}/>
          ))}
      </ToDoList>

      {<CreateToDoButton/>}
    </React.Fragment>
    
    );
}

export default App;
