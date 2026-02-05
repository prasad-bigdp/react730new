
import './App.css'
import { useState,useEffect } from 'react'
function App ()
{
  const [name, setName] = useState('')
  const [pokDetails, setPokeDetails] = useState({})
  const [error,setError]= useState('')
  useEffect(() =>
  {
    async function fetchData()
    {
      if (name.length != 0) {
        try
        {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          if (res.status == 404)
          {
            setPokeDetails({message:"There is no pokemon with this name"})
          }
        else
          {
          const data = await res.json()
        setPokeDetails(data)}
        }
        catch (e)
        {
          setError(e)
        }
			}
    }
    fetchData()
  },[name])
  return (
		<>
			<header className='bg-gray-600 text-2xl text-white flex justify-between py-3 px-5'>
				<h2 className='text-4xl text-white'>
					Poke <span className=' text-blue-500'>DEX</span>{" "}
				</h2>
				<div className=' border border-white rounded-2xl p-1'>
					<input
						type='text'
						placeholder='Enter the pokemon name'
						id='na'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='border-0 focus:outline-0'
					/>
				</div>
			</header>
			<main className=' h-screen flex justify-center items-center'>
				{pokDetails.name && (
					<>
						<img
							src={pokDetails.sprites.front_default}
							alt={pokDetails.name}
							className=' h-96'
						/>
						<div className=' flex flex-col gap-2'>
							<h2 className=' text-3xl'>{pokDetails.name}</h2>
							<p className='text-2xl'>height:{pokDetails.height}</p>
							<p className='text-2xl'>Weight:{pokDetails.weight}</p>
						</div>
					</>
				)}
				{pokDetails.message && (
					<h2 className='text-4xl text-black'>{pokDetails.message}</h2>
				)}
				{error.message && (
					<h2 className='text-4xl text-black'>{error.message}</h2>
				)}
			</main>
			<footer className=' bg-gray-500 text-3xl text-white text-center py-2'>
				This site belongs to XYZ &copy;2025
			</footer>
		</>
	)
}
export default App