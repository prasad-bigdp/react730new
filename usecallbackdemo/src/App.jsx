import React, { useCallback ,useMemo} from "react"
import { useState } from "react"
import Child from "./Child"
function App() {
	const [x, setX] = useState(0)
	const handleClick = useCallback(() => console.log("button clicked"), [])
	const calculatedValue = useMemo(() => {
		let p = 1
		for (let i = 1; i <= 10; i++) {
			p = p * i
		}
		return p
	},[])
	return (
		<div>
			<p>{x}</p>
			<p>{calculatedValue}</p>
			<button onClick={() => setX(x + 1)}>click me</button>
			<Child clickFn={handleClick} />
		</div>
	)
}

export default App
