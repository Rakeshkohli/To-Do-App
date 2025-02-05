import React from 'react'

function Inputcontainer({inputVal, writeTodo, addTodos}) {
  return (
    <div className='input-container'>
        <input type="text" value={inputVal} onChange={writeTodo}/>
        <button onClick={addTodos}>+</button>
    </div>
  )
}

export default Inputcontainer