import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './redux/actions'
function App ()
{
  const c = useSelector((state)=>state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{c}</h2>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</div>
	)
}

export default App
