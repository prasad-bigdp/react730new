import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home ()
{
  const [prompt, setPrompt] = useState("")
  const navigate = useNavigate()
  const handlePrompt = () =>
  {
    if (prompt.trim() == "")
      alert("Please Enter a Prompt")
    else
     navigate("/generate",{state:{prompt}})
  }
  return (
		<div className='h-screen flex flex-col justify-center items-center gap-10'>
			<h1 className=' text-5xl max-w-3xl font-extrabold'>
				Turn Your{" "}
				<span className='bg-linear-120 from-[#f5795a] to-[#0206e8] bg-clip-text text-transparent'>
					IDEAS 
				</span> into Webpages Within Few Seconds
      </h1>
      <div className=' flex justify-center items-center gap-5'>
        <textarea className=' resize-none w-3xl border rounded-3xl p-3 text-2xl' rows={5} type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='Enter the Prompt here' />
        <button onClick={handlePrompt} className=' bg-blue-500 text-2xl text-white p-3 rounded-2xl'>Generate</button>
      </div>
		</div>
	)
}

export default Home
