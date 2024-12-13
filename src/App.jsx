import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='min-h-screen max-w-3xl mx-auto'>
      <Navbar />
      <Home />
    </main>
  )
}

export default App
