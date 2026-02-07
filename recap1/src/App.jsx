import Book from './Book'
import { useState } from 'react'
import { useEffect,useMemo } from 'react'
import { useCallback } from 'react'
function App ()
{
  const [cart, setCart] = useState(0)
  const [books,setBooks]=useState([])
  useEffect(() =>
  {
    fetch(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books`)
      .then((res) => res.json())
      .then((data)=>setBooks(data))
    .catch((err)=>console.log(err))
  }, [])
  const someValue = useMemo(() => {
		let a = 5,
			b = 3
		return a + b
  }, [])
 const doSomething = useCallback(()=>{
		console.log("hi")
 },[])
  return (
		<>
      <h1 className=' text-center text-5xl my-2'>Parent Component: cart: {cart}</h1>
      <p>Some value: {someValue}</p>
      <div className='mx-auto max-w-5xl grid grid-cols-3 gap-3 my-5'>
        {books.map((e) => (
          <Book title={e.title} pages={e.pages} setCart={setCart} cart={cart} fn={doSomething} />
        ))}
      </div>
		</>
	)
}

export default App
