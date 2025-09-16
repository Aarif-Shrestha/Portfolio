import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'

import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
    </div>
  )
}

export default App
