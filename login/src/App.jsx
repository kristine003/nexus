import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Admindb from './components2/Admindb'


function App() {
  const [count, setCount] = useState(0)
  let appname="pro";

  return (
    <>

    <Navbar/>
    <Nexnav/>
    
    
    



    <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/adm' element={<Admin/>}></Route>
      <Route path='/reg' element={<Register/>}></Route>
      <Route path='/addb' element={<Admindb/>}></Route>
      <Route path='/groups' element={<Groups/>}></Route>
      <Route path="/profile" element={<Profile/>} ></Route>
      <Route path="/home" element={<Nexhome/>} ></Route>
      <Route path="/abt" element={<About/>} ></Route>
      <Route path="/cntct" element={<Contact/>} ></Route>
      <Route path="/studygroups" element={<Studygroups/>} ></Route>
      <Route path="/useradm" element={<Useradmin/>} ></Route>
      <Route path="/apprv" element={<Approval/>} ></Route>
    </Routes>
    </>
  )
}

import User from './components/User'
import Admin from './components/Admin'
import Register from './components/Register'
import Groups from './components2/Groups'
import Nexnav from './components3/Nexnav'
import Nexhome from './components3/Nexhome'
import Profile from './components3/Profile'
import Studygroups from './components3/Studygroups'
import Useradmin from './components2/Useradmin'
import Approval from './components2/Approval'
import About from './components3/About'
import Contact from './components3/Contact'

export default App