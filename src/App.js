import './App.css';
import React, {useState,useEffect} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
    }
  },[]);

   useEffect(() => {
     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  }, [todos])

  function addTodo(todo){
    setTodos([todo,...todos]);
  }

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id!==id))
  }

  function checkTodo(id){
    setTodos(todos.map(todo => {
      if(todo.id === id ){
        return {
          ...todo,
          completed : !todo.completed,
        }
      }
      return todo      
    }))
}

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    </div>
  );
}

export default App;
