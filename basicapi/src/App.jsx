import { useEffect,useState } from "react";
function App ()
{
  const [data, setData] = useState([])
  useEffect(() =>
  {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((ans) =>setData(ans))
      .catch((err) => console.log(err))
  },[])
  return (
		<>
			<header className=' bg-gray-600 text-white text-3xl text-center py-3'>
				BAsic API
			</header>
			<main className='my-5 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{data.recipes &&
					data.recipes.map((r) => (
						<div className='p-5 flex flex-col justify-between rounded-2xl shadow shadow-amber-200'>
							<img
								src={r.image}
								alt={r.name}
							/>
							<h2>{r.name}</h2>
							<p>Rating: {r.rating}/5</p>
						</div>
					))}
			</main>
			<footer className=' bg-gray-600 text-white text-2xl text-center py-2'>
				Application made with 💓 by PRASAD
			</footer>
		</>
	)
}
export default App;