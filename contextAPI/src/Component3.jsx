import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './main'
function Component3 ()
{
    const {theme,setTheme} =useContext(ThemeContext)
  return (
    <div style={{border:"2px solid red",height:"200px",width:"200px",background:theme=="light"?"white":"black"}}>
      My Theme is {theme}
    </div>
  )
}

export default Component3
