import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <div className="flex justify-start">
        <button 
          onClick={toggleMenu}
          className="p-2 text-gray-700 focus:outline-none pr-6"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay and Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img 
                src="/assets/header-logo.png" 
                alt="Logo"
                className="h-8"
              />
            </Link>
            <div className="flex gap-4">
              <button
                className="relative rounded-full w-10 h-10 bg-white shadow-md flex items-center justify-center"
                aria-label="User account"
              >
                <FontAwesomeIcon icon={faUser} className="text-[#051B2C]" />
              </button>
              <button
                className="relative rounded-full w-10 h-10 bg-white shadow-md flex items-center justify-center"
                aria-label="Shopping cart"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-[#051B2C]" />
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </div>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="חיפוש..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#00BAFF]"
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>
        
        <nav className="flex flex-col p-4">
          <Link to="/" className="py-2 text-gray-700 hover:text-[#00BAFF]">ראשי</Link>
          <Link to="/packages" className="py-2 text-gray-700 hover:text-[#00BAFF]">חנות</Link>
          <Link to="/login" className="py-2 text-gray-700 hover:text-[#00BAFF]">התחברות</Link>
          <Link to="/signup" className="py-2 text-gray-700 hover:text-[#00BAFF]">הרשמה</Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;