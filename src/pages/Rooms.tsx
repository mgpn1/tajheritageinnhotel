import React from 'react';
import TopBar from '../components/TopBar';
import { IndianRupee, Lock, ThumbsUp, Menu } from 'lucide-react';

function Rooms() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[600px] bg-[url('https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-center">
              ROOMS
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center">
              TAJ HERITAGE INN
            </h2>
          </div>
        </div>

        {/* Rooms Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" alt="Superior Double Bed" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Superior Double Bed</h3>
                <p className="text-gray-600">Our Superior Double Bed rooms feature a plush king-size bed, modern amenities, and a spacious bathroom. Perfect for couples seeking comfort and relaxation after exploring Agra's historic sites.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg" alt="Executive Twin Bed" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Executive Twin Bed</h3>
                <p className="text-gray-600">The Executive Twin Bed rooms are perfect for friends or colleagues traveling together. Featuring two comfortable single beds and premium amenities, these rooms offer both comfort and functionality.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="Executive Double Bed" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Executive Double Bed</h3>
                <p className="text-gray-600">Experience enhanced comfort and luxury in our Executive Double Bed rooms. These spacious rooms feature premium amenities and elegant furnishings, ensuring a memorable stay.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg" alt="Suite" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Suite</h3>
                <p className="text-gray-600">Our luxurious Suite offers the ultimate comfort and elegance. With a separate living area, premium amenities, and personalized services, it's perfect for those seeking an exceptional stay experience.</p>
              </div>
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
              <p className="mb-2">Shahganj Road, Near Agra Fort, Agra - 282 003 (U.P) INDIA</p>
              <p className="mb-2">+91 9876543210</p>
              <p>+91 9876543211</p>
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

export default Rooms; 