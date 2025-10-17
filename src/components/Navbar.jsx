import React from 'react';

function Navbar() {
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
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
    </div>
    </div>
  );
}

export default Navbar;