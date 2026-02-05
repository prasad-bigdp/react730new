import React, { useEffect } from "react"

const Child=({ clickFn }) =>{
	useEffect(() => console.log("hiii"))
	return <button onClick={clickFn}>child button</button>
}

export default React.memo(Child)
