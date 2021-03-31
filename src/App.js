import React, {useState, useRef} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';

function App() {
  //Initialize
  //Object destructuring
  
  //const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  const [todos, setTodos] = useState([{id: uuidv4() , name: 'Todo 1', complete: false }])

  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name==='') return
    console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id:1 , name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }
  return (
    <>
      <TodoList list={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
