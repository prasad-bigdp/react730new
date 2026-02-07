import Todos from "./components/Todos"

const App = () => {
  return (
    <div>
      <header className=" bg-gray-700 text-4xl text-white text-center py-3">Simple Todo Application</header>
      <Todos />
      <footer className=" border-t-2 border-black text-3xl">This Website made by XYZ &copy; 2026</footer>
      
    </div>
  )
}

export default App
