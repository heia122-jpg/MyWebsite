import React from 'react'
import { Route , Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './pages/Layout';
import NavBar from './pages/sub_page/NavBar';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import './components.style.css'


const AnimatedPath = () => {

    const location = useLocation();
  return (
    <>
    <div className='bxshdw'> 
    <NavBar />
    </div>
    <AnimatePresence>
        <Routes location={location} key={location.path}>
            <Route path='/' element={<Layout />} >
                <Route path='/reg' element={<Register />} />
                <Route path='/login' element={<LogIn/>} />
            </Route>
        </Routes>
    </AnimatePresence>
    </>
  )
}

export default AnimatedPath
