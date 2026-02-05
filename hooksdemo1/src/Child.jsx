import React, { useEffect } from 'react'

function Child ({ clickFn })
{
    useEffect(()=>console.log("hiii"))
  return (
    <button onClick={clickFn}>
      child button
    </button>
  )
}

export default Child
