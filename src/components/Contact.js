import React from 'react';
import contactImage from '../assets/contact.png'; // Ensure the correct path to the image

const Contact = () => {
  return (
    <div>
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-0">Contact us</h1>
        <div className="flex flex-col md:flex-row items-start mt-0">
          <div className="flex-1 mt-0">
          <img src={contactImage} alt="Contact Us" className="w-full rounded-md mt-0" style={{ height: '500px', objectFit: 'cover' }} />
          </div>
          <div className="flex-1 md:ml-10 mt-6 md:mt-0">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-semibold mb-2" htmlFor="first-name">Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="w-full p-2 border-2 border-orange-500 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2" htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="w-full p-2 border-2 border-orange-500 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border-2 border-orange-500 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-2 border-2 border-orange-500 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
