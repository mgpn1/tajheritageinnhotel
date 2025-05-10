import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

function TopBar() {
  return (
    <div className="bg-[#1e1e1e] text-white">
      {/* Top Contact Bar */}
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <span>info@tajheritageinn.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-[#f9a825] transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-[#f9a825] transition-colors">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-[#f9a825] transition-colors">
            <Instagram size={16} />
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white text-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-[#1e1e1e]">TAJ HERITAGE INN</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/" className="hover:text-[#f9a825] transition-colors">HOME</Link>
              <Link to="/about" className="hover:text-[#f9a825] transition-colors">ABOUT</Link>
              <Link to="/facilities" className="hover:text-[#f9a825] transition-colors">FACILITIES</Link>
              <Link to="/rooms" className="hover:text-[#f9a825] transition-colors">ROOMS</Link>
              <Link to="/gallery" className="hover:text-[#f9a825] transition-colors">GALLERY</Link>
              <Link to="/contact" className="hover:text-[#f9a825] transition-colors">CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopBar;