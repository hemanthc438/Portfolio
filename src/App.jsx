import React from 'react'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className='overflow-hidden text-neutral-300 antialiased selection:bg-neutral-300 selection:text-black'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#FFFFFF_100%)]"></div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59, 130, 246, 0.3),rgba(123, 31, 162, 0))]"></div>
      </div>
      <div className='container mx-auto px-4'>
        <NavBar/>
        <Profile/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}