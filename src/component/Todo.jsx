import React from 'react'

function Todo({todo, index, delTodo}) {
  return (
    <div className='todo'>
          <div className='action'>
            <input type="checkbox"/>
          </div>
          <p>{todo}</p>
        <button onClick={()=>delTodo(index)}>Delete</button>
    </div>
  )
}

export default Todo