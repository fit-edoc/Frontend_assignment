import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader'
import Hero from './layouts/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Loader/>
  
   <Hero/>
   </>
  )
}

export default App
