import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skill from './components/Skills/Skill'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
function App() {
 

  return (
    <>
        
        <Navbar/>
        <Home  />
        <About />
        <Skill />
        <Project/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
