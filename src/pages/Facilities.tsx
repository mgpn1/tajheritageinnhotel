import React from 'react';
import { IndianRupee, Lock, ThumbsUp, Menu } from 'lucide-react';

function Facilities() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[600px] bg-[url('https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-center">
              FACILITIES
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center">
              TAJ HERITAGE INN
            </h2>
          </div>
        </div>

        {/* Facilities Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="Restaurant" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Restaurant</h3>
                <p className="text-gray-600">Experience authentic Indian cuisine at our in-house restaurant. Our chefs prepare traditional dishes using the finest local ingredients, offering a true taste of Agra's culinary heritage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" alt="Conference Room" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Conference Room</h3>
                <p className="text-gray-600">Our state-of-the-art conference facilities are perfect for business meetings and events. Equipped with modern technology and comfortable seating, we ensure your business needs are met with professionalism.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg" alt="Swimming Pool" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Swimming Pool</h3>
                <p className="text-gray-600">Take a refreshing dip in our outdoor swimming pool. Surrounded by lush greenery, it's the perfect place to relax and unwind after a day of exploring Agra's historic sites.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg" alt="Spa" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Spa</h3>
                <p className="text-gray-600">Indulge in traditional Indian wellness treatments at our spa. Our expert therapists offer a range of massages and therapies designed to rejuvenate your body and mind.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/13772033/pexels-photo-13772033.jpeg" alt="Fitness Center" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fitness Center</h3>
                <p className="text-gray-600">Stay active during your stay with our well-equipped fitness center. Featuring modern exercise equipment, it's the perfect place to maintain your fitness routine while traveling.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg" alt="Business Center" className="w-full h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Center</h3>
                <p className="text-gray-600">Our business center provides all the facilities you need to stay connected and productive. With high-speed internet, printing services, and comfortable workstations, we ensure your business needs are well taken care of.</p>
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

export default Facilities; 