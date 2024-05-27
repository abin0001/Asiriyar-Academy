import React from 'react'
import logo from '../assets/logo.png'
import about from '../assets/about.png'

const About = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-15  ml-3 mt-4" />
        </div>
        <nav className="flex space-x-20">
        <a href="/" className="text-lg font-semibold hover:text-orange-700 mt-4" >Home</a>
          <a href="/about" className="text-lg font-semibold hover:text-orange-700 mt-4">About Us</a>
          <a href="/course" className="text-lg font-semibold hover:text-orange-700 mt-4">Course</a>
          <button className="text-lg font-semibold text-white bg-orange-500 rounded-lg px-5 py-2 mt-2 mb-2">Contact Us</button>
        </nav>
        </header>
      
    </div>
  )
}

export default About