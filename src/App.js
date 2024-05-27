import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About'; 
import Course from './components/Course';
import Contact from './components/Contact'; 
import logo from './assets/logo.png'; // Import the logo

function App() {
  return (
    <Router>
      <div>
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-15  ml-3 mt-4" />
          </div>
          <nav className="flex space-x-20">
            <Link to="/" className="text-lg font-semibold hover:text-orange-700 mt-4" >Home</Link>
            <Link to="/about" className="text-lg font-semibold hover:text-orange-700 mt-4">About Us</Link>
            <Link to="/course" className="text-lg font-semibold hover:text-orange-700 mt-4">Course</Link>
            {/* Link the "Contact Us" button to the Contact page */}
            <Link to="/contact" className="text-lg font-semibold text-white bg-orange-500 rounded-lg px-5 py-2 mt-2 mb-2 hover:bg-orange-600">Contact Us</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
