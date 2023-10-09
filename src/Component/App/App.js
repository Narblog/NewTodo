import { useState } from 'react';
import AddItem from '../AddItem';
import './App.css';
import Sort from '../Sort';
import Filter from '../Filter';
import AddText from '../AddText';
import Header from '../Header';



function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      Text: "Buy groceries for next week",
      isDone: false,
    
    },
    {
      id: Math.random(),
      Text: "Renew car insurance",
      isDone: false,
    
    },
    {
      id: Math.random(),
      Text: "Sign up for online course",
      isDone: false,
    
    },
  ]);
 
  const handleChangeTodo=(nextTodo)=> {
    setTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }));
  }


  const onDelete = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos)
  }
  const onAdd=(text)=>{
    setTodos([
      ...todos,
      {
        id:  Math.random(),
        Text: text,
        isDone: false
      }
    ])
  }
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <AddItem onAdd={onAdd} />
        <div className='line'></div>
        <Sort />
        <Filter />
        <AddText
          todos={todos}
          onDelete={onDelete}
          onChangeTodo={handleChangeTodo}
        />
      </div>

      
    </div>

  );
}

export default App;
