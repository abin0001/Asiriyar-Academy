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
        <main>
        <div className="p-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 md:mr-10">
            <h1 className="text-4xl font-bold mt-0 mb-10">About Us</h1>
            <p className="text-lg mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-500 text-white p-6 rounded-lg">
              <p className="text-center font-semibold mb-2">Our Vision</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bg-white border-2 border-orange-500 text-orange-500 p-6 rounded-lg flex flex-col items-center">
                <p className="text-center font-semibold mb-2">Our Mission</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <img src={about} alt="About Us" className="w-full h-auto rounded-full border-4 border-orange-500" />
          </div>
        </div>
      </div>
        </main>
      
    </div>
  )
}

export default About