import React from 'react'
import logo from '../assets/logo.png'
import group from '../assets/group.png'

const Landing = () => {
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
        <main className="flex flex-1 justify-between items-center p-6 bg-gray-50">
        <div className="max-w-lg">
          <h2 className="text-orange-500 text-xl font-bold mb-2 ml-20">LEARN FROM TODAY</h2>
          <h1 className="text-4xl font-bold mb-4 mt-8 ml-20">THE BEST WAY FOR YOUR LEARNING</h1>
          <p className="text-gray-700 mb-6 ml-20 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 ml-20">Get Started</button>
            <button className="bg-white text-orange-500 border border-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50">▶ Watch</button>
          </div>
        </div>
        <div className="relative">
          <img src={group} alt="Main" />
        </div>
        </main>
    </div>
  )
}

export default Landing