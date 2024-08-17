import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  let appname="pro";

  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/add' element={<Admin/>}></Route>
      <Route path='/reg' element={<Register/>}></Route>
    </Routes>
    </>
  )
}

import User from './components/User'
import Admin from './components/Admin'
import Register from './components/Register'
export default App