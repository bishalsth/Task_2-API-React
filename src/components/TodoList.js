import React from 'react'

function TodoList({todos}) {
  return (
    <div>
            <h2 className='text-center'>TODOS LIST</h2>
        <ul className='list-group'>
            {todos.map((todo)=>  <li class="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}

            <input type="checkbox" checked={todo.completed} />
            </li>
            
            )}
        </ul>

    </div>
  )
}

export default TodoList