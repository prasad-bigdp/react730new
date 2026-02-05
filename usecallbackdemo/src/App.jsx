import React, { useCallback } from "react"
import { useState } from "react"
import Child from "./Child"
function App() {
	const [x, setX] = useState(0)
	const handleClick = useCallback(() => console.log("button clicked"),[])
	return (
		<div>
			<p>{x}</p>
			<button onClick={() => setX(x + 1)}>click me</button>
			<Child clickFn={handleClick} />
		</div>
	)
}

export default App
