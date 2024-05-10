import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState([])
  const [input,setInput] = useState("")
  const handleChange = (e) =>{
    setInput(e.target.value)
  }
  const handleClick = () =>{
    setText([...text,input])
    setInput("")
  }

  const handleDeleteTodo = (index) => {
    const newTodos = text.filter((todo, i) => i !== index);
    setText(newTodos);
  }

  return (
    <>
        <div>
          <input type="text" placeholder='type to add something' onChange={handleChange} value={input} />
          <button onClick={handleClick}>Add Item</button>
          <ul>
          {text.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
          </ul>
        </div>
    </>
  )
}

export default App
