import React  from 'react';
// import logo from './logo.svg';
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
// import './App.css';

const toDos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Curso React', completed: false},
  {text: 'Planchar Ropa', completed: false},
]

function App() {
  return (

    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
          {toDos.map(todo => (
            <ToDoItem key={todo.text} text={todo.text}/>
          ))}
      </ToDoList>

      {<CreateToDoButton/>}
    </React.Fragment>
    
    );
}

export default App;
