
function Book({title,pages,setCart,cart}) {
  return (
		<div className=' p-3 rounded-2 flex flex-col gap-2 bg-amber-200'>
			<h2>Book Name: {title}</h2>
			<p>Pages: {pages}</p>
			<button className='bg-black rounded text-white py-2 text-center ' onClick={() => setCart(cart + 1)}>click me</button>
		</div>
	)
}

export default Book
