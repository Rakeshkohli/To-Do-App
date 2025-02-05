import { useState } from 'react'
import './App.css'
import Inputcontainer from './component/Inputcontainer'
import Todocontainer from './component/Todocontainer'

function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])
  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  function addTodos() {
    if (inputVal!='') { //agar input field khali nhi h, matlab usme kuch lekh h
      setTodos((prevTodos) => [...prevTodos, inputVal]) //previous task ko waise hi rahega new task add ho jaega
      setInputVal('') //task add krne ke baad input field ko empty kr dega
    }
  }
  function delTodo(todoIndex) {
    setTodos((prevTodos)=> prevTodos.filter((prevTodos, prevTodosIndex) => {
      return prevTodosIndex != todoIndex;
    }))
  }
  console.log(todos)
  return (
    <>
      <h1>To do List</h1>
      <Inputcontainer inputVal={inputVal} writeTodo={writeTodo} addTodos={addTodos}/>
      <Todocontainer todos={todos} delTodo={delTodo}/>
    </>
  )
}

export default App
