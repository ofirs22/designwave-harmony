import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Menu: React.FC = () => {
  return (
    <div className="w-full">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block w-full h-[30px] bg-[#0B6F94] text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center h-full gap-6">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faClock} className="text-sm" />
              <span className="text-sm font-semibold">Mon - Fri:</span>
              <span className="text-sm font-semibold">9:00am - 9:00pm</span>
            </div>
            <div className="w-[1.3px] h-4 bg-white" />
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
              <span className="text-sm">Call us:</span>
              <span className="text-sm font-semibold">+1-202-555-0168</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="w-full bg-[#f4f5f5] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center gap-14">
              {/* Logo */}
              <Link to="/" className="w-[173px] h-[65px]">
                <img
                  src="/assets/header-logo.png"
                  alt="Logo"
                  width={173}
                  height={65}
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-10">
                <Link to="/" className="flex items-center gap-3 cursor-pointer">
                  <span className="text-[#26465A] font-semibold text-base">
                    ראשי
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} className="text-[#26465A] text-sm" />
                </Link>
                <Link to="/packages" className="flex items-center gap-3 cursor-pointer">
                  <span className="text-[#26465A] font-semibold text-base">
                    חנות
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} className="text-[#26465A] text-sm" />
                </Link>
                <div className="flex items-center gap-3 cursor-pointer">
                  <span className="text-[#26465A] font-semibold text-base">
                    מבצעים
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} className="text-[#26465A] text-sm" />
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <span className="text-[#26465A] font-semibold text-base">
                    מוצרים
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} className="text-[#26465A] text-sm" />
                </div>
                <Link to="/login" className="text-[#26465A] font-semibold text-base">
                  התחברות
                </Link>
                <Link to="/signup" className="text-[#26465A] font-semibold text-base">
                  הרשמה
                </Link>
              </nav>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center gap-14">
              {/* Search Bar */}
              <div className="hidden lg:flex">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="חפש מוצר"
                    className="w-[313px] h-[52px] border border-[#EBEBEB] px-4 text-lg rounded-l-full"
                    aria-label="Search products"
                  />
                </div>
                <button
                  className="rounded-r-full w-[95px] h-[52px] bg-[#00BAFF] text-white flex items-center justify-center"
                  aria-label="Search"
                >
                  <FontAwesomeIcon icon={faSearch} className="text-lg" />
                </button>
              </div>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;