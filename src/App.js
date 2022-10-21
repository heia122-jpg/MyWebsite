import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import AnimatedPath from './components/AnimatedPath'
import NavBar from './components/pages/sub_page/NavBar'

const App = () => {
  return (
    
    <Router>
      <AnimatedPath />
    </Router>

  )
}

export default App

