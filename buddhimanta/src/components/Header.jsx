import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className='flex justify-between py-3 px-5 items-center'>
          <div className=' flex gap-2 items-center'>
              <img src="logo.png" alt="logo" className=' h-20 animate-bounce'/> 
           <h2 className=' text-3xl font-bold bg-linear-120 from-[#f5795a] to-[#0206e8] bg-clip-text text-transparent'>BuddhiMantha</h2>   
          </div>
          <nav>
              <ul className=' flex gap-3 items-center'>
                  <li><Link to="" className='text-xl'>Home</Link></li>
                  <li><Link to="/about" className='text-xl'>About</Link></li>
                  <li><Link to="/contact" className='text-xl'>Contact</Link></li>
              </ul>
          </nav>
    </header>
  )
}

export default Header
