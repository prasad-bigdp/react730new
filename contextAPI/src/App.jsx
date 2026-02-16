import React from 'react'
import { useState } from 'react'
import { ThemeContext } from './main'
import Component1 from './Component1'
function App ()
{
  const [theme,setTheme] = useState('light')
  return (
    <>
      <p>The theme is {theme}</p>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Component1 />
      </ThemeContext.Provider>
      <button onClick={() => { let x = theme == 'light' ? 'dark' : 'light'; setTheme(x)}}>click me</button>
		</>
	)
}

export default App
