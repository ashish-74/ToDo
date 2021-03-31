import React from 'react';
import Todo from './Todo';

function TodoList ({todos,deleteTodo,checkTodo}){
    return(
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />
                ))}
            </ul>            
        </div>        
    );
}

export default TodoList;