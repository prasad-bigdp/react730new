import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
function Generate ()
{
    const location = useLocation();
    const [code,setCode]= useState('')
    const initialPrompt = location.state?.prompt
    const [messages, setMessages] = useState([
			{
				role: "system",
				content: `You are a website builder AI that generates complete, working HTML, CSS, and JavaScript websites.
Follow these rules:
Always return full working code.
Output code in a single HTML file unless the user explicitly asks for separate files.
Include HTML, CSS (inside <style>), and JavaScript (inside <script>).
Use clean, modern, responsive design.
Use semantic HTML5 elements.
Make the layout mobile-friendly.
Avoid external libraries unless requested.
Keep code simple, readable, and well-structured.
Do not explain the code unless the user asks.
Only output code — no extra commentary.
If the user request is unclear, make reasonable assumptions and build a complete, usable site.
`,
			}
		])
     const asktheAI = async (content) => {
const updatedPrompt = [...messages, { role: "user", content: content }]
console.log(updatedPrompt)
         const response = await puter.ai.chat(updatedPrompt)
         if (response.success && response.result?.message?.content) {
						setCode(response.result.message.content)

						console.log("AI CODE:", response.result.message.content)
						setMessages((prev) => [
							...prev,
							{ role: "user", content },
							{ role: "assistant", content: response.result.message.content },
						])
					} else {
						console.error("Unexpected response shape:", response)
					}
         
			}
    useEffect(() =>
    {
        if (initialPrompt)
        {
            console.log(initialPrompt)
            asktheAI(initialPrompt)
        }   
    },[])
   
  return (
		<div>
			{code && (
				<iframe
					title='preview'
					srcDoc={code}
					frameborder='0' height="500px" width="400px"></iframe>
			)}
		</div>
	)
}

export default Generate
