import React from 'react';

function Todo({todo,deleteTodo,checkTodo}){
    return(
        <div className='list-item'>
            <input type='checkbox' onClick={()=> checkTodo(todo.id)} />
            <li className="list-item">
                {todo.task} 
                {todo.completed && <span><i> ---> Done.</i></span>}
            </li>
            <button onClick={()=> deleteTodo(todo.id)}>X</button>
        </div>
    );
}

export default Todo;