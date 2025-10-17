import React from 'react';

function Navbar() {
  return(
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Forecast</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a>Contact</a></li>
         </ul>
         <div className="flex gap-2">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
    </div>
    </div>
  );
}

export default Navbar;