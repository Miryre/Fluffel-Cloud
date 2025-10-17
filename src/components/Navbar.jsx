import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  // Local state to track what user is typing
  const [searchInput, setSearchInput] = useState('');

  // Handle when user types in the search box
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handle when user clicks search or presses Enter
  const handleSearchClick = () => {
    if (searchInput.trim()) {
      onSearch(searchInput);
      setSearchInput(''); // Clear the input after search
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return(
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">fluffelcloud</a>
      </div>
      <div className="flex-none flex gap-2">
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
            className="input input-bordered w-24 md:w-auto"
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
    </div>
  );
};

export default Navbar;