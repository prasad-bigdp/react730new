import React, { useState } from 'react'

function Todos ()
{
    const [inputvalue, setInputvalue] = useState("")
    const [todoItems, setTodoItems] = useState([])
    const [isChecked,setIsChecked] =useState(false)
    function AddTodo ()
    {
        setTodoItems([...todoItems, { text: inputvalue, isCompleted: false }])
        setInputvalue("")
    }
    function deleteTodo (ind)
    {
        let newTodoItems = todoItems.filter((e, i) => i != ind)
        setTodoItems(newTodoItems)
    }
  return (
    <div className=' mx-auto my-5 max-w-5xl flex flex-col gap-5 justify-center items-center'>
          <div className=' flex gap-3 '>
              <input type="text" value={inputvalue} className=' focus:outline-0 border-2 border-black rounded-2xl text-3xl p-3' placeholder='What you wanna do today?'
                  onChange={(e) => setInputvalue(e.target.value)} />
              <button className=' bg-black tetx-2xl text-white rounded-2xl p-2'
                  onClick={AddTodo}>Add Todo</button>
          </div>
          <div className=' flex flex-col gap-4'>
              {todoItems.map((e,i) => (
                  <div className='flex gap-5 items-center'>
                      <input type="checkbox" className='h-5 w-5' checked={isChecked}
                          onChange={() =>
                          {
                              e.isCompleted = e.isCompleted ? false : true;
                              if (isChecked)
                                  setIsChecked(false)
                              else
                                  setIsChecked(true)
                          } } />
                      <p className=' text-2xl text-black font-bold' style={{color:e.isCompleted?"green":"black"}}>{e.text}</p>
                      <button className=' bg-red-500 text-2xl text-white rounded-2xl p-2'
                      onClick={()=>deleteTodo(i)}>delete</button>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Todos
