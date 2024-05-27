import React, { useState } from 'react';
import courseImage from '../assets/courseimg.png'

const Course = () => {
  const [showMore, setShowMore] = useState(false);

  const courses = [
    { id: 1, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 2, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 3, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 4, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 5, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 6, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 7, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 8, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 9, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
    { id: 10, title: 'AI Full Stack', description: 'Lorem Ipsum is a standard dummy text used in printing and web design' },
  ];

  const displayedCourses = showMore ? courses : courses.slice(0, 5);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Our Popular Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayedCourses.map(course => (
          <div 
            key={course.id} 
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <img src={courseImage} alt={course.title} className="w-full h-100 mb-10 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <h3 className="text-lg font-semibold text-white">{course.title}</h3>
              <p className="text-sm text-gray-300">{course.description}</p>
              <button className="mt-4 text-sm font-semibold text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600">View</button>
            </div>
          </div>
        ))}
      </div>
      {!showMore && (
        <div className="text-center mt-8">
          <button 
            onClick={() => setShowMore(true)} 
            className="text-lg font-semibold mb-10 text-white bg-orange-500 rounded-lg px-6 py-3 hover:bg-orange-600">
            View more</button>
        </div>
      )}
    </div>
  );
};

export default Course;