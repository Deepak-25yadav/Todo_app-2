import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Register from './component/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
      <Register/>
    </div>
  )
}

export default App
