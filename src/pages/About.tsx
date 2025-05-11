import React from 'react';
import { IndianRupee, Lock, ThumbsUp, Menu } from 'lucide-react';

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[600px] bg-[url('https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-center">
              ABOUT
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center">
              TAJ HERITAGE INN
            </h2>
          </div>
        </div>

        {/* About Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
              <p className="text-gray-600 mb-8">
                Taj Heritage Inn is a boutique hotel that combines the rich heritage of Agra with modern luxury. Located in the heart of the city, our hotel offers a perfect blend of traditional hospitality and contemporary comfort. Our prime location near the Taj Mahal makes us an ideal choice for travelers seeking to experience the magic of Agra.
              </p>
              <p className="text-gray-600 mb-8">
                With our commitment to exceptional service and attention to detail, we ensure that every guest experiences the warmth of Indian hospitality. Our rooms are designed to provide the perfect retreat after a day of exploring the city's magnificent monuments.
              </p>
              <p className="text-gray-600">
                At Taj Heritage Inn, we believe in creating memorable experiences for our guests. From our authentic Indian cuisine to our personalized services, every aspect of your stay is carefully curated to make your visit to Agra truly special.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-[#1e1e1e] text-white py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <IndianRupee size={48} className="text-[#f9a825] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
            </div>
            <div className="flex flex-col items-center">
              <Lock size={48} className="text-[#f9a825] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe and Secure</h3>
            </div>
            <div className="flex flex-col items-center">
              <ThumbsUp size={48} className="text-[#f9a825] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Travel Agents</h3>
            </div>
            <div className="flex flex-col items-center">
              <Menu size={48} className="text-[#f9a825] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Travel Guidelines</h3>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1e1e1e] text-white py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
              <p className="mb-2">Fatehabad Road, Near Taj Mahal, Agra - 282 001 (U.P) INDIA</p>
              <p className="mb-2">+91 9310109521</p>
              <p>+91 9837103285</p>
              <p>info@tajheritageinn.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Facilities</h3>
              <ul className="space-y-2">
                <li>BUSINESS CENTER</li>
                <li>ON CALL DOCTOR</li>
                <li>FREE PARKING</li>
                <li>EMERGENCY EXIT</li>
                <li>POWER BACKUP</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li>FULL AC ROOM</li>
                <li>RESTAURANTS</li>
                <li>FREE WI-FI</li>
                <li>TRAVEL DESK</li>
                <li>CAR RENTAL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
              <p>Welcome to the luxurious and beautiful paradise on earth. The Taj Heritage Inn is located at the heart of Agra's tourist zone, offering a perfect blend of heritage and modern comfort. Our prime location provides easy access to the magnificent Taj Mahal, one of the seven wonders of the world, making it an ideal choice for your stay in Agra.</p>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2024 Taj Heritage Inn. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Refund Policy</a>
                <a href="#">Cancellation Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default About; 