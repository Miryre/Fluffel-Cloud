import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  // Local state to track what user is typing
  const [searchInput, setSearchInput] = useState('');
  
  // State to track if mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle when user types in the search box
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handle when user clicks search or presses Enter
  const handleSearchClick = () => {
    if (searchInput.trim()) {
      onSearch(searchInput);
      setSearchInput('');
      setIsMobileMenuOpen(false); // Close mobile menu after search
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">fluffelcloud</a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li><a>Forecast</a></li>
          <li><a>Latest</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Search city..." 
            className="input input-bordered w-auto"
            value={searchInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button 
            onClick={handleSearchClick}
            className="btn btn-primary"
          >
            Search
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button 
          className="btn btn-ghost btn-circle"
          onClick={toggleMobileMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-base-100 shadow-lg lg:hidden z-50">
          <ul className="menu menu-vertical p-4 space-y-2">
            <li>
              <a onClick={() => setIsMobileMenuOpen(false)}>Forecast</a>
            </li>
            <li>
              <a onClick={() => setIsMobileMenuOpen(false)}>Latest</a>
            </li>
            <li>
              <a onClick={() => setIsMobileMenuOpen(false)}>About</a>
            </li>
            <li>
              <a onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </li>
            <li className="pt-4">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Search city..." 
                  className="input input-bordered flex-1"
                  value={searchInput}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  onClick={handleSearchClick}
                  className="btn btn-primary"
                >
                  Search
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;